import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "./vsekarte.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <nav>
          <ul>
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
          <div className="search_btn">
            <input
              type="search"
              placeholder="Ime zabave"
              className="inputText"
            ></input>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <h>hej</h>
      </div>
    </Layout>
  );
};

export default vsekarte;
