import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import ShoppingFooter from "./footer";
import NewsletterSignup from "./newsletter";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <NewsletterSignup />
      <ShoppingFooter />
    </div>
  );
}
// #E8C96B
export default ShoppingLayout;
