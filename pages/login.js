import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/login.module.css";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'

export default function Login() {
  return (
    <Layout>
      <div>
        <Navbar />
        <section id={styles.loginForm}>
          <h1>Prijava</h1>
          <form action="submit" className={styles.logForm}>
            <div>
              <label htmlFor="username">uporabniško ime</label>
              <input type="text" name="username" id="username" className={styles.inputField}/>
            </div>
            <div>
              <label htmlFor="password">geslo</label>
              <input type="password" name="password" id="password" className={styles.inputField}/>
            </div>
            <div>
              <input type="submit" value="Prijava" id="submit" />
            </div>
          </form>
        </section>
        <section id={styles.registration}>
          <div>Še nimaš profila? Registriraj se!</div>
          <hr />
          <div>
            ali pa se prijavi s pomočjo naslednjih metod
            <div className={styles.icons}>
              <div><FontAwesomeIcon icon={faGoogle} /></div>
              <div><FontAwesomeIcon icon={faFacebook} /></div>
              <div><FontAwesomeIcon icon={faApple} /></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
