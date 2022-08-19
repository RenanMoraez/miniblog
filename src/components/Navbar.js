// nav
import {NavLink} from "react-router-dom";
import { useState } from "react";
import {HiOutlineMenu, HiX} from "react-icons/hi"
// hooks
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

// css
import styles from "./Navbar.module.css";



const Navbar = () => {

  const {user} = useAuthValue();
  const {logout} = useAuthentication();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Belém<span>Tech</span>
        </NavLink>


        <ul className={isOpen ? styles.links_list_mobile : styles.links_list}>
            <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active: "")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => (isActive ? styles.active: "")}>Sobre</NavLink></li>
            {!user && 
            <>
            <li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active: "")}>Entrar</NavLink></li>
            <li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active: "")}>Registrar</NavLink></li>
            </>}
            {user && 
            <>
            <li><NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active: "")}>Novo Post</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active: "")}>Dashboard</NavLink></li>
            </>}
            {user && (
              <li>
                 <button onClick={logout}>Sair</button>
              </li>
            )}
         </ul>
         <button className={styles.menu_icon} onClick={() => setIsOpen(!isOpen)}> 
               {isOpen ? <HiX size={30}/> : <HiOutlineMenu size={30} /> }
         </button>
    </nav>
  )
}

export default Navbar