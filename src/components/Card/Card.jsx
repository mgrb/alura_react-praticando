import { useFavoritosContext } from "@/hooks/useFavoritosContext";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

export function Card({ id, titulo, capa }) {
  const { favoritos, alternarFavorito } = useFavoritosContext();
  const ehFavorito = favoritos.some((filme) => filme.id === id);
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={ehFavorito ? iconeDesfavoritar : iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => alternarFavorito({ id, titulo, capa })}
      />
    </div>
  );
}
