import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

function ShoppingFooter() {
  return (
    // <footer className="bg-gray-900 text-white py-6 mt-auto">
    <footer style={{ backgroundColor: "#E8C96B" }} className="text-black py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <Link to="/shop/home" className="flex items-center gap-2 text-black">
          <Leaf className="h-6 w-6" />
          <span className="font-bold">Scents by Butterfly</span>
        </Link>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Scents by Butterfly. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link to="/shop/about" className="text-black-300 hover:text-black">
            About Us
          </Link>
          <Link to="/shop/contact" className="text-black-300 hover:text-black">
            Contact
          </Link>
          <Link to="/shop/privacy" className="text-black-300 hover:text-black">
            Privacy Policy
          </Link>
          <Link to="/shop/terms" className="text-black-300 hover:text-black">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default ShoppingFooter;
