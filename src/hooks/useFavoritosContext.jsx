import { FavoritosContext } from "@/context/FavoritosContext";
import { useContext } from "react";

export const useFavoritosContext = () => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const alternarFavorito = (item) => {
    const itemRepetido = favoritos.some((favorito) => favorito.id === item.id);
    let novaLista = [...favoritos];

    if (itemRepetido) {
      novaLista = novaLista.filter((favorito) => favorito.id !== item.id);
    } else {
      novaLista.push(item);
    }
    return setFavoritos(novaLista);
  };

  return { favoritos, alternarFavorito };
};
