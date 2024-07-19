import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favoritos from "./pages/Favoritos";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
