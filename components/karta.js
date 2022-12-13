import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./karta.module.css";
import mypic from "../slike/party.jpg";
const Karta = () => {
  return (
    <div>
      <div className={styles.event}>
        <div className={styles.banner}>
          <Image src={mypic} className={styles.poster} />
          <h4 className={styles.klub}>ŠTUK</h4>
          <div className={styles.kdajdatum}>
            <p className={styles.kdaj}>kdaj:</p>
            <h4 className={styles.datum}>31.1.2022</h4>
          </div>
        </div>
        <div className={styles.eventDetails}>
          <div className={styles.box}>
            <h4 className={styles.naslov}>Naslov eventa</h4>
            <p className={styles.ocena}>9.7€</p>
          </div>
          <div className={styles.opis}></div>
        </div>
      </div>
    </div>
  );
};

export default Karta;
