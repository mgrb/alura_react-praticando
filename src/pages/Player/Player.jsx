import PaginaPadrao from "@/components/PaginaPadrao";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import videos from "@/json/db.json";
import { NaoEncontrada } from "../NaoEncontrada/NaoEncontrada";

export function Player() {
  const { id } = useParams();
  const video = videos.find((video) => video.id === Number(id));
  if (!video) return <NaoEncontrada />;
  return (
    <PaginaPadrao banner="player" titulo={video.titulo}>
      <section className={styles.container}>
        <iframe
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </PaginaPadrao>
  );
}
