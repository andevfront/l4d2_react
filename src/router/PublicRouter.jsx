import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRouter = () => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  return logged ? (
    <Navigate to="/" />
  ) : (
    <main className="container mx-auto p-10">
      <Outlet />
    </main>
  );
};
