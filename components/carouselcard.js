import React from "react";
import styles from "./carouselcard.module.css";

const CarouselCard = () => {
    return (
      <div>
        <div className={styles.Item}>
          <div className={styles.itemText}>
              <div className={styles.right}>
                <h3 className={styles.partyName}>Brucovanje</h3>
                <p className={styles.dateof}>02.11.2022 ob 19h</p>
              </div>
              <h2 className={styles.price}>5€</h2>
            </div>
        </div>
      </div>
    );
  };
  
  export default CarouselCard;