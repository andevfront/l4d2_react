import { Outlet } from "react-router-dom";

export const PublicRouter = () => {
  return (
    <main className="container mx-auto p-10">
      <Outlet />
    </main>
  );
};
