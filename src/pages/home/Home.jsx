import Cabecalho from "@/components/Cabecalho";
import styles from "./Home.module.css";
import Rodape from "@/components/Rodape";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";

export function Home() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo><h1>Um Lugar para guardar seus vídeos e filmes!</h1></Titulo>
      <Card id='1' titulo='teste' capa='https://i.pinimg.com/736x/6f/a0/21/6fa021a998ef2a230ad8251bf1d3c943.jpg'/>
      <Rodape />
    </>
  );
}
