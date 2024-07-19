import PaginaPadrao from "@/components/PaginaPadrao";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NaoEncontrada } from "../NaoEncontrada/NaoEncontrada";
import styles from "./Player.module.css";

export function Player() {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/videos/${id}`)
      .then((videoServerResponse) => videoServerResponse.json())
      .then((responseData) => setVideo(responseData));
  }, [id]);

  if (!video) return <NaoEncontrada />;
  return (
    <PaginaPadrao banner="player" titulo={video.titulo}>
      <iframe
        src={video.link}
        title={video.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </PaginaPadrao>
  );
}
