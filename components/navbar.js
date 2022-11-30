import Layout from './layout';
import styles from './navbar.module.css';

export default function Navbar({ children }) {
    return ( 
        <Layout>
            <div className={styles.navbar}>
                <a href='/'><div className="logo">Ticket</div></a>
                <nav className={styles.item}>
                <ul className={styles.ul}>
                    <li className={`${styles.left} ${styles.li}`}>
                    <a href="/pages/vsekarte">Vse karte</a>
                    </li>
                    <li className={`${styles.prijava} ${styles.li}`}>
                    <a href="/login">Prijava</a>
                    </li>
                    <li className={`${styles.registracija} ${styles.li}`}>
                    <a href="/registration">Registracija</a>
                    </li>
                </ul>
                </nav>
            </div>
        </Layout>
    );
}

