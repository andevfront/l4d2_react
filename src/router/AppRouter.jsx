import { Navigate, Route, Routes } from "react-router-dom";

import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import {
  CharacterPage,
  InfectedPage,
  SearchPage,
  SurvivorsPage,
} from "../characters";
import { ErrorPage } from "../pages";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<Navigate to="/survivors" />} />
        <Route path="survivors" element={<SurvivorsPage />} />
        <Route path="infected" element={<InfectedPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="/:category/:id" element={<CharacterPage />} />
      </Route>

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
