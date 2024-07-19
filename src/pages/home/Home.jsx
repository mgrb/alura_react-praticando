import Card from "@/components/Card";
import PaginaPadrao from "@/components/PaginaPadrao";
import { useEffect } from "react";
import { useState } from "react";

export function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((videoServerResponse) => videoServerResponse.json())
      .then((responseData) => setVideos(responseData));
  }, []);

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
