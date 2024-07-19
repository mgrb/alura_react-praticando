import Cabecalho from "@/components/Cabecalho";
import styles from "./Home.module.css";
import Rodape from "@/components/Rodape";
import Banner from "@/components/Banner";

export function Home() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />
    </>
  );
}
