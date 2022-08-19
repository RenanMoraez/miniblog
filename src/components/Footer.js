import styles from "./Footer.module.css";
import imgPara from "./bandeira.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img src={imgPara} alt="bandeira do estado do pará" />
        <h4>O seu pequeno blog paraense</h4>
        <p>BelémTech &copy; 2022</p>
    </footer>
  )
}

export default Footer