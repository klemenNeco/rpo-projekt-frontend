import Layout from "./layout";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faHouse} from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ children }) {
  return (
    <Layout>
      <style jsx global>{`
        html,
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <div className={styles.navbar}>
        <nav className={styles.item}>
          <div className={styles.left}>       
            <a href="/" className={styles.logo}>
              vstopnice.si
            </a>
            <ul className={styles.ul}>
            <li className={`${styles.left} ${styles.li}`}>
                <p className={styles.divide}>|</p>
              </li>
              <li className={`${styles.left} ${styles.li}`}>
                <a href="/vsekarte">Vse karte</a>
              </li>
              <li className={`${styles.prijava} ${styles.li}`}>
                <a href="/login">Štuk</a>
              </li>
              <li className={`${styles.registracija} ${styles.li}`}>
                <a href="/register">Trust</a>
              </li>
            </ul>          
          </div>
        </nav>
        <div className={styles.right}>
              <ul className={styles.ul}>
                <li className={`${styles.right} ${styles.li}`}>
                  <a href="/"><FontAwesomeIcon icon={faHouse} /></a>
                </li>
                <li className={`${styles.right} ${styles.li}`}>
                  <a href="/register"><FontAwesomeIcon icon={faUser} /></a>
                </li>
              </ul>          
            </div>
      </div>
    </Layout>
  );
}
