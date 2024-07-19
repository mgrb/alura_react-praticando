import Favoritos from "@/pages/Favoritos";
import Home from "@/pages/home";
import Player from "@/pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NaoEncontrada } from "./pages/NaoEncontrada/NaoEncontrada";
import { PaginaBase } from "./pages/PaginaBase/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
