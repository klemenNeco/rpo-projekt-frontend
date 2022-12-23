import React from "react";
import styles from "./carouselcard.module.css";

const CarouselCard = (props) => {
  let naslov = "Brucovanje";
  let klub = "Štuk";
  let date = "02.11.2022 ob 19h";
  let cena = 5;

  if (props.naslov) {
    naslov = props.naslov;
  }
  if (props.klub) {
    klub = props.klub;
  }
  if (props.cena) {
    cena = props.cena;
  }
  if (props.datum) {
    date = props.datum;
  }
  return (
    <div>
      <div className={styles.Item}>
        <div className={styles.itemText}>
          <div className={styles.right}>
            <h3 className={styles.partyName}>{naslov}</h3>
            <p className={styles.dateof}>{date}</p>
          </div>
          <h2 className={styles.price}>{cena}€</h2>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
