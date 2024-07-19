import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favoritos from "./pages/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
