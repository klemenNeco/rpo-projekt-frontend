import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/register.module.css";

export default function Login() {
  return (
    <Layout>
      <div>
        <Navbar />
        <section id={styles.registerForm}>
          <h1>Registracija</h1>
          <form action="submit">
            <div>
              <label htmlFor="fname">Ime</label>
              <input type="text" name="fname" id="fname" className={styles.inputField}/>
            </div>
            <div>
              <label htmlFor="lname">Priimek</label>
              <input type="text" name="lname" id="lname" className={styles.inputField}/>
            </div>
            <div>
              <label htmlFor="email">e-poštni naslov</label>
              <input type="email" name="email" id="email" className={styles.inputField}/>
            </div>
            <div>
              <label htmlFor="email2">ponovi e-poštni naslov</label>
              <input type="email" name="email2" id="email2" className={styles.inputField}/>
            </div>
            <div>
              <label htmlFor="password">geslo</label>
              <input type="password" name="password" id="password" className={styles.inputField}/>
              <div>
                <ul id={styles.list}>
                  <li>Geslo mora imeti med 8 in 28 znakov</li>
                  <li>Geslo mora vsebovati vsaj 1 številko</li>
                  <li>Geslo mora vsebovati vsaj 1 posebni znak (npr. #$%&@)</li>
                </ul>
              </div>
            </div>
            <div>
              <label htmlFor="password2">ponovi geslo</label>
              <input type="password" name="password2" id="password2" className={styles.inputField}/>
            </div>
            <div>
              <input type="checkbox" id="gdpr" name="gdpr" value="GDPR" className={styles.check} />
              <label htmlFor="gdpr" className={styles.checkLabel}>S prijavo se strinjam s shranjevanjem mojih osebnih podatkov za potrebe delovanja aplikacije, v skladu z GDPR.</label>
            </div>
            <div>
            <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" className={styles.check} />
              <label htmlFor="newsletter" className={styles.checkLabel}>Želim prejemati novice o najnovejših dogodkih in promocijah na vstopnice.si</label>
            </div>
            <div>
              <input type="submit" value="Prijava" id="submit" />
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
