import { Route, Routes } from "react-router-dom";
import { Articale, Home, Product } from "../pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Product} path="/product" />
      <Route Component={Articale} path="/articale" />
    </Routes>
  );
};

export default MainRoutes;
