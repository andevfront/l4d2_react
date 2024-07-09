import { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../auth";
import { Footer, HamburguerMenu, Header } from "../components";

export const PrivateRouter = () => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return !logged ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header toggleMenu={toggleMenu} />
      <main className="container mx-auto p-10">
        <Outlet />
      </main>
      <HamburguerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Footer />
    </>
  );
};
