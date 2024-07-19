import Card from "@/components/Card";
import PaginaPadrao from "@/components/PaginaPadrao";
import videos from "@/json/db.json";

export function Favoritos() {
  return (
    <PaginaPadrao titulo="Meus Favoritos" banner="favoritos">
      {videos.map((video) => (
        <Card key={video.id} {...video} />
      ))}
    </PaginaPadrao>
  );
}
