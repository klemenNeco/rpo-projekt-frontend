import Layout from "./layout";
import styles from "./navbar.module.css";

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
        <a href="/" className="logo">
          Ticket
        </a>
        <nav className={styles.item}>
          <ul className={styles.ul}>
            <li className={`${styles.left} ${styles.li}`}>
              <a href="/vsekarte">Vse karte</a>
            </li>
            <li className={`${styles.prijava} ${styles.li}`}>
              <a href="/login">Prijava</a>
            </li>
            <li className={`${styles.registracija} ${styles.li}`}>
              <a href="/register">Registracija</a>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
}
