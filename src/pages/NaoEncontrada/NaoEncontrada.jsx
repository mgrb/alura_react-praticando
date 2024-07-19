import PaginaPadrao from "@/components/PaginaPadrao";
import styles from "./NaoEncontrada.module.css";
import { useNavigate } from "react-router-dom";

export function NaoEncontrada() {
  const navigate = useNavigate();
  return (
    <PaginaPadrao banner="home" titulo="404 :: Página não encontrada">
      <section className={styles.container}>
        <p>O conteúdo que você esta procurando não foi encontrado!</p>
        <button className={styles.botaoVoltar} onClick={() => navigate(-1)}>
          Voltar
        </button>
      </section>
    </PaginaPadrao>
  );
}
