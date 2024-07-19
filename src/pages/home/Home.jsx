import Card from "@/components/Card";
import PaginaPadrao from "@/components/PaginaPadrao";
import videos from "@/json/db.json";

export function Home() {
  return (
    <PaginaPadrao
      banner="home"
      titulo="Um Lugar para guardar seus vídeos e filmes!"
    >
      {videos.map((video) => (
        <Card key={video.id} {...video} />
      ))}
    </PaginaPadrao>
  );
}
