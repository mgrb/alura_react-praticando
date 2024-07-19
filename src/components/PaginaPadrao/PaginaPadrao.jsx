import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import styles from "./PaginaPadrao.module.css";

export function PaginaPadrao({ children, banner, titulo }) {
  return (
    <>
      <Banner imagem={banner} />
      <Titulo>
        <h1>{titulo}</h1>
      </Titulo>
      <section className={styles.container}>{children}</section>
    </>
  );
}
