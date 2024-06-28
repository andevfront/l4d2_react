import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
