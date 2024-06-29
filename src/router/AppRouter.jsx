import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { InfectedPage, SurvivorsPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/sobrevivientes" />} />
        <Route path="sobrevivientes" element={<SurvivorsPage />} />
        <Route path="infectados" element={<InfectedPage />} />
      </Route>
    </Routes>
  );
};
