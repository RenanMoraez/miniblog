import styles from "./About.module.css";
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Belém<span>Tech</span></h2>
      <p>Este é o pequeno projeto de blog feito em React no front-end e com Firebase no back-end.</p>

      <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About