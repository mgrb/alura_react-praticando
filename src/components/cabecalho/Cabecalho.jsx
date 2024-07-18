import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from "/imagens/logo.png";
import CabecalhoLink from "../CabecalhoLink";

export function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo Cine Tag" />
      </Link>
      <nav>
        <CabecalhoLink url={"./"}>Home</CabecalhoLink>
        <CabecalhoLink url={"./favoritos"}>Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}
