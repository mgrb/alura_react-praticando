import Cabecalho from "@/components/Cabecalho";
import Container from "@/components/Container";
import Rodape from "@/components/Rodape";
import FavoritosProvider from "@/context/FavoritosContext";
import { Outlet } from "react-router-dom";

export function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
