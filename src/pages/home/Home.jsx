import Cabecalho from "@/components/Cabecalho";
import styles from "./Home.module.css";
import Rodape from "@/components/Rodape";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";

export function Home() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo><h1>Um Lugar para guardar seus vídeos e filmes!</h1></Titulo>
      <Rodape />
    </>
  );
}
