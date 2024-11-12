import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12"> */}
      <div className="hidden lg:flex items-center justify-center " style={{ backgroundColor: "#E8C96B" }}>
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-6xl text-black font-extrabold tracking-tight p-4">
            Scents by Butterfly 
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
