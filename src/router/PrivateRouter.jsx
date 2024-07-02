import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const PrivateRouter = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
