import Cabecalho from "@/components/Cabecalho";
import styles from "./Home.module.css";
import Rodape from "@/components/Rodape";

export function Home() {
  return (
    <>
      <Cabecalho />
      <main className={styles.main}>
        <h1>Home</h1>
      </main>
      <Rodape />
    </>
  );
}
