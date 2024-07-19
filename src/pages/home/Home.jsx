import Banner from "@/components/Banner";
import Cabecalho from "@/components/Cabecalho";
import Card from "@/components/Card";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";
import videos from "@/json/db.json";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
      <Rodape />
    </>
  );
}
