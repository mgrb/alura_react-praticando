import Cabecalho from "@/components/Cabecalho";
import Container from "@/components/Container";
import Rodape from "@/components/Rodape";
import FavoritosProvider from "@/context/FavoritosContext";
import Favoritos from "@/pages/Favoritos";
import Home from "@/pages/home";
import Player from "@/pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NaoEncontrada } from "./pages/NaoEncontrada/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
