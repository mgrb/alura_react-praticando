import Card from "@/components/Card";
import PaginaPadrao from "@/components/PaginaPadrao";
import { useFavoritosContext } from "@/hooks/useFavoritosContext";

export function Favoritos() {
  const { favoritos } = useFavoritosContext();
  return (
    <PaginaPadrao titulo="Meus Favoritos" banner="favoritos">
      {favoritos.length === 0 && <h3>Ainda não tem favoritos</h3>}
      {favoritos.map((video) => (
        <Card key={video.id} {...video} />
      ))}
    </PaginaPadrao>
  );
}
