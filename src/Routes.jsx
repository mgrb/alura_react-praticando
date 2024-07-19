import Cabecalho from "@/components/Cabecalho";
import Container from "@/components/Container";
import Rodape from "@/components/Rodape";
import FavoritosProvider from "@/context/Favoritos";
import Favoritos from "@/pages/Favoritos";
import Home from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
