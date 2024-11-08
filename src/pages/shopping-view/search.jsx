import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { fetchProductDetails } from "@/store/shop/products-slice";
import { getSearchResults, resetSearchResults } from "@/store/shop/search-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function SearchProducts() {
  const [keyword, setKeyword] = useState("");
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.shopSearch);
  const { productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { toast } = useToast();

  // Effect to handle search query changes
  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length > 3) {
      setLoading(true); // Set loading to true when starting search
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        dispatch(getSearchResults(keyword))
          .finally(() => {
            setLoading(false); // Reset loading state when the search is finished
          });
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      dispatch(resetSearchResults());
    }
  }, [keyword, dispatch, setSearchParams]);

  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    console.log(cartItems);
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  function handleGetProductDetails(getCurrentProductId) {
    console.log(getCurrentProductId);
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  const renderSearchMessage = () => {
    if (!keyword || keyword.trim() === "") {
      return <h1 className="text-5xl font-extrabold">Enter Search Query</h1>;
    } else if (searchResults.length === 0) {
      return <h1 className="text-5xl font-extrabold">No result found!</h1>;
    }
  };

  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      <div className="flex justify-center mb-8">
        <div className="w-full flex items-center">
          <Input
            value={keyword}
            name="keyword"
            onChange={(event) => setKeyword(event.target.value)}
            className="py-6"
            placeholder="Search Products..."
          />
        </div>
      </div>

      {/* Display loading spinner if loading is true */}
      {loading ? (
        <div className="flex justify-center py-6">
          <div
            className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-10 h-10"
            style={{
              borderTopWidth: "4px",
              borderColor: "#e5e5e5",
              borderTopColor: "#000",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
      ) : (
        renderSearchMessage()
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Render Search Results */}
        {searchResults.map((item) => (
          <ShoppingProductTile
            handleAddtoCart={handleAddtoCart}
            product={item}
            handleGetProductDetails={handleGetProductDetails}
            key={item.id}
          />
        ))}
      </div>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />

      {/* Inline style for spinner */}
      <style>
        {`
          .spinner-border {
            border-width: 4px;
            border-color: #e5e5e5;
            border-top-color: #000;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default SearchProducts;






































































// import ProductDetailsDialog from "@/components/shopping-view/product-details";
// import ShoppingProductTile from "@/components/shopping-view/product-tile";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
// import { fetchProductDetails } from "@/store/shop/products-slice";
// import { getSearchResults, resetSearchResults } from "@/store/shop/search-slice";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";

// function SearchProducts() {
//   const [keyword, setKeyword] = useState("");
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   const { searchResults } = useSelector((state) => state.shopSearch);
//   const { productDetails } = useSelector((state) => state.shopProducts);
//   const { user } = useSelector((state) => state.auth);
//   const { cartItems } = useSelector((state) => state.shopCart);
//   const { toast } = useToast();

//   // Effect to handle search query changes
//   useEffect(() => {
//     if (keyword && keyword.trim() !== "" && keyword.trim().length > 3) {
//       setTimeout(() => {
//         setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
//         dispatch(getSearchResults(keyword));
//       }, 1000);
//     } else {
//       setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
//       dispatch(resetSearchResults());
//     }
//   }, [keyword, dispatch, setSearchParams]);

//   function handleAddtoCart(getCurrentProductId, getTotalStock) {
//     console.log(cartItems);
//     let getCartItems = cartItems.items || [];

//     if (getCartItems.length) {
//       const indexOfCurrentItem = getCartItems.findIndex(
//         (item) => item.productId === getCurrentProductId
//       );
//       if (indexOfCurrentItem > -1) {
//         const getQuantity = getCartItems[indexOfCurrentItem].quantity;
//         if (getQuantity + 1 > getTotalStock) {
//           toast({
//             title: `Only ${getQuantity} quantity can be added for this item`,
//             variant: "destructive",
//           });
//           return;
//         }
//       }
//     }

//     dispatch(
//       addToCart({
//         userId: user?.id,
//         productId: getCurrentProductId,
//         quantity: 1,
//       })
//     ).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchCartItems(user?.id));
//         toast({
//           title: "Product is added to cart",
//         });
//       }
//     });
//   }

//   function handleGetProductDetails(getCurrentProductId) {
//     console.log(getCurrentProductId);
//     dispatch(fetchProductDetails(getCurrentProductId));
//   }

//   useEffect(() => {
//     if (productDetails !== null) setOpenDetailsDialog(true);
//   }, [productDetails]);

//   const renderSearchMessage = () => {
//     if (!keyword || keyword.trim() === "") {
//       return <h1 className="text-5xl font-extrabold">Enter Search Query</h1>;
//     } else if (searchResults.length === 0) {
//       return <h1 className="text-5xl font-extrabold">No result found!</h1>;
//     }
//   };

//   return (
//     <div className="container mx-auto md:px-6 px-4 py-8">
//       <div className="flex justify-center mb-8">
//         <div className="w-full flex items-center">
//           <Input
//             value={keyword}
//             name="keyword"
//             onChange={(event) => setKeyword(event.target.value)}
//             className="py-6"
//             placeholder="Search Products..."
//           />
//         </div>
//       </div>
//       {/* Display Search Message */}
//       {renderSearchMessage()}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {/* Render Search Results */}
//         {searchResults.map((item) => (
//           <ShoppingProductTile
//             handleAddtoCart={handleAddtoCart}
//             product={item}
//             handleGetProductDetails={handleGetProductDetails}
//             key={item.id}
//           />
//         ))}
//       </div>
//       <ProductDetailsDialog
//         open={openDetailsDialog}
//         setOpen={setOpenDetailsDialog}
//         productDetails={productDetails}
//       />
//     </div>
//   );
// }

// export default SearchProducts;


















// import ProductDetailsDialog from "@/components/shopping-view/product-details";
// import ShoppingProductTile from "@/components/shopping-view/product-tile";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
// import { fetchProductDetails } from "@/store/shop/products-slice";
// import {
//   getSearchResults,
//   resetSearchResults,
// } from "@/store/shop/search-slice";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";

// function SearchProducts() {
//   const [keyword, setKeyword] = useState("");
//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   const { searchResults } = useSelector((state) => state.shopSearch);
//   const { productDetails } = useSelector((state) => state.shopProducts);

//   const { user } = useSelector((state) => state.auth);

//   const { cartItems } = useSelector((state) => state.shopCart);
//   const { toast } = useToast();
//   useEffect(() => {
//     if (keyword && keyword.trim() !== "" && keyword.trim().length > 3) {
//       setTimeout(() => {
//         setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
//         dispatch(getSearchResults(keyword));
//       }, 1000);
//     } else {
//       setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
//       dispatch(resetSearchResults());
//     }
//   }, [keyword]);

//   function handleAddtoCart(getCurrentProductId, getTotalStock) {
//     console.log(cartItems);
//     let getCartItems = cartItems.items || [];

//     if (getCartItems.length) {
//       const indexOfCurrentItem = getCartItems.findIndex(
//         (item) => item.productId === getCurrentProductId
//       );
//       if (indexOfCurrentItem > -1) {
//         const getQuantity = getCartItems[indexOfCurrentItem].quantity;
//         if (getQuantity + 1 > getTotalStock) {
//           toast({
//             title: `Only ${getQuantity} quantity can be added for this item`,
//             variant: "destructive",
//           });

//           return;
//         }
//       }
//     }

//     dispatch(
//       addToCart({
//         userId: user?.id,
//         productId: getCurrentProductId,
//         quantity: 1,
//       })
//     ).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchCartItems(user?.id));
//         toast({
//           title: "Product is added to cart",
//         });
//       }
//     });
//   }

//   function handleGetProductDetails(getCurrentProductId) {
//     console.log(getCurrentProductId);
//     dispatch(fetchProductDetails(getCurrentProductId));
//   }

//   useEffect(() => {
//     if (productDetails !== null) setOpenDetailsDialog(true);
//   }, [productDetails]);

//   console.log(searchResults, "searchResults");

//   return (
//     <div className="container mx-auto md:px-6 px-4 py-8">
//       <div className="flex justify-center mb-8">
//         <div className="w-full flex items-center">
//           <Input
//             value={keyword}
//             name="keyword"
//             onChange={(event) => setKeyword(event.target.value)}
//             className="py-6"
//             placeholder="Search Products..."
//           />
//         </div>
//       </div>
//       {!searchResults.length ? (
//         <h1 className="text-5xl font-extrabold">No result found!</h1>
//       ) : null}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {searchResults.map((item) => (
//           <ShoppingProductTile
//             handleAddtoCart={handleAddtoCart}
//             product={item}
//             handleGetProductDetails={handleGetProductDetails}
//           />
//         ))}
//       </div>
//       <ProductDetailsDialog
//         open={openDetailsDialog}
//         setOpen={setOpenDetailsDialog}
//         productDetails={productDetails}
//       />
//     </div>
//   );
// }

// export default SearchProducts;
