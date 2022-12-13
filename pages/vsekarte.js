import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "./vsekarte.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Karta from "../components/karta";

const vsekarte = (props) => {
  return (
    <Layout>
      <style jsx global>{`
        body {
          background-color: #bf6f13;
        }
      `}</style>
      <Navbar />
      <div className={styles.vse}>
        <div className={styles.header}>
          <nav>
            <ul className={styles.filther}>
              <li>
                <a href="#">Štuk</a>
              </li>
              <li>
                <a href="#">Trust</a>
              </li>
              <li>
                <a href="#">po datomu</a>
              </li>
            </ul>
          </nav>
          <form>
            <div className={styles.search_btn}>
              <input
                type="search"
                placeholder="Ime zabave"
                className={styles.inputText}
              ></input>
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.container}>
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
      </div>
    </Layout>
  );
};

export default vsekarte;
