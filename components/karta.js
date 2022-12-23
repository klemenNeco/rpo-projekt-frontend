import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./karta.module.css";
import mypic from "../slike/party.jpg";
const Karta = (props) => {
  return (
    <div>
      <div className={styles.event}>
        <div className={styles.banner}>
          <Image src={mypic} className={styles.poster} />
          <h4 className={styles.klub}>{props.klub}</h4>
          <div className={styles.kdajdatum}>
            <p className={styles.kdaj}>kdaj:</p>
            <h4 className={styles.datum}>{props.datum}</h4>
          </div>
        </div>
        <div className={styles.eventDetails}>
          <div className={styles.box}>
            <h4 className={styles.naslov}>{props.naslov}</h4>
            <p className={styles.ocena}>{props.cena}€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karta;
