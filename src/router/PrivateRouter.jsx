import { Navigate, Outlet} from "react-router-dom";
import { Footer, Header } from "../components";
import { useContext } from "react";
import { AuthContext } from "../auth";

export const PrivateRouter = () => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  return !logged ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />
      <main className="container mx-auto p-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
