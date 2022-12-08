import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "./vsekarte.module.css";

const vsekarte = (props) => {
  return (
    <Layout>
      <Navbar />
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
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default vsekarte;
