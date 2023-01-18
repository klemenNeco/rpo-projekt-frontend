import { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/vsekarte.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Karta from "../components/karta";

import CarouselCard from "../components/carouselcard";

const vsekarte = (props) => {
  let podatki = [
    { klub: "ŠTUK", cena: 12, datum: "31.1.2023", naslov: "Brucovanje" },
    { klub: "ŠTUK", cena: 7, datum: "12.12.2022", naslov: "STANDUP" },
    { klub: "TRUST", cena: 4, datum: "16.12.2022", naslov: "Joker out" },
    { klub: "ŠTUK", cena: 10, datum: "20.12.2022", naslov: "DJ-Nej" },
    { klub: "TRUST", cena: 20, datum: "11.2.2023", naslov: "Nuci" },
    { klub: "ŠTUK", cena: 5, datum: "31.1.2023", naslov: "Čiga Čaga" },
    { klub: "ŠTUK", cena: 7, datum: "12.12.2022", naslov: "STANDUP" },
    { klub: "TRUST", cena: 4, datum: "16.12.2022", naslov: "Joker out" },
    { klub: "ŠTUK", cena: 10, datum: "20.12.2022", naslov: "DJ-Nej" },
    { klub: "TRUST", cena: 20, datum: "11.2.2023", naslov: "Nuci" },
    { klub: "ŠTUK", cena: 5, datum: "31.1.2023", naslov: "Čiga Čaga" },
    { klub: "ŠTUK", cena: 7, datum: "12.12.2022", naslov: "STANDUP" },
    { klub: "TRUST", cena: 4, datum: "16.12.2022", naslov: "Joker out" },
    { klub: "ŠTUK", cena: 10, datum: "20.12.2022", naslov: "DJ-Nej" },
    { klub: "TRUST", cena: 20, datum: "11.2.2023", naslov: "Nuci" },
  ];
  podatki = podatki.sort(
    (a, b) =>
      new Date(...a.datum.split(".").reverse()) -
      new Date(...b.datum.split(".").reverse())
  );
  const [filtrirani, setFiltrirani] = useState(podatki);
  const [search, setSearch] = useState();

  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const showStuk = (e) => {
    e.preventDefault();
    setFiltrirani(
      podatki.filter((dogodek) => {
        return dogodek.klub === "ŠTUK";
      })
    );
  };
  const showTrust = (e) => {
    e.preventDefault();
    setFiltrirani(
      podatki.filter((dogodek) => {
        return dogodek.klub === "TRUST";
      })
    );
  };
  const showVse = (e) => {
    e.preventDefault();
    setFiltrirani(podatki);
  };

  const findSimilar = (e) => {
    e.preventDefault();
    setFiltrirani(
      podatki.filter((dogodek) => {
        return dogodek.naslov.toLowerCase().includes(search);
      })
    );
  };

  return (
    <Layout>
      <Navbar />
      <div className={styles.vse}>
        <div className={styles.header}>
          <nav>
            <ul className={styles.filther}>
              <li>
                <a href="#" onClick={showVse}>
                  Vse
                </a>
              </li>
              <li>
                <a href="#" onClick={showStuk}>
                  Štuk
                </a>
              </li>
              <li>
                <a href="#" onClick={showTrust}>
                  Trust
                </a>
              </li>
            </ul>
          </nav>
          <form>
            <div className={styles.search_btn}>
              <input
                type="search"
                placeholder="Ime zabave"
                className={styles.inputText}
                onChange={updateSearch}
              ></input>
              <button onClick={findSimilar} id={styles.search}>
                <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.container}>
        {filtrirani.map((item, index) => (
          <CarouselCard {...filtrirani[index]} />
        ))}
      </div>
    </Layout>
  );
};

export default vsekarte;
