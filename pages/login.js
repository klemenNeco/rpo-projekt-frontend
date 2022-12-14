import Link from "next/link";
import Layout from "../components/layout";
<<<<<<< HEAD
import styles from "../styles/login.module.css"

export default function Login() {
    return (
        <Layout>
            <div>
                <section id={styles.loginForm}>
                    <h1>Prijava</h1>
                    <form action="submit">
                        <div>
                            <label htmlFor="username">uporabniško ime</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div>
                            <label htmlFor="password">geslo</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <input type="submit" value="Prijava" id="submit" />
                    </form>
                </section>
                <section id={styles.registration}>
                    <div>Še nimaš profila? Registriraj se!</div>
                    <hr />
                    <div>
                        ali pa se prijavi s pomočjo naslednjih metod
                        <div>Google</div>
                        <div>Facebook</div>
                        <div>Apple</div>
                    </div>
                </section>
                <h1><Link href="/">Nazaj domov</Link></h1>
            </div>
        </Layout> 
    )
}
=======
import styles from "../styles/login.module.css";
import Navbar from "../components/navbar";

export default function Login() {
  return (
    <Layout>
      <div>
        <Navbar />
        <section id={styles.loginForm}>
          <h1>Prijava</h1>
          <form action="submit">
            <div>
              <label htmlFor="username">uporabniško ime</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">geslo</label>
              <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="Prijava" id="submit" />
          </form>
        </section>
        <section id={styles.registration}>
          <div>Še nimaš profila? Registriraj se!</div>
          <hr />
          <div>
            ali pa se prijavi s pomočjo naslednjih metod
            <div>Google</div>
            <div>Facebook</div>
            <div>Apple</div>
          </div>
        </section>
        <h1>
          <Link href="/">Nazaj domov</Link>
        </h1>
      </div>
    </Layout>
  );
}
>>>>>>> main
