import styles from '../styles/cart.module.css';
import Link from 'next/link';
import { React, useState } from 'react'
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import Carousel from 'nuka-carousel'
import CarouselCard from "../components/carouselcard";
   
export default function cart() {
return (
    <Layout>
    <div className={styles.container}>
    <Navbar></Navbar>
    <h1 className={styles.header}>Vaša nakupovalna košarica</h1>
    <div className={styles.buycardparent}>
        <div className={styles.buycard}>
            <div className={styles.buycardtext}>
                <div className={styles.right}>
                    <h2>Ime dogodka</h2>
                    <p>Lokacija cas datum</p>
                    Posebnosti karte (odrasli, otroci, ...)
                </div>
                <div className={styles.right}>
                    <h2>5€</h2>
                    <p>Količina: </p>
                    <p>Znesek: </p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.buycardparent}>
        <div className={styles.buycard}>
            <div className={styles.buycardtext}>
                <div className={styles.right}>
                    <h2>Ime dogodka</h2>
                    <p>Lokacija cas datum</p>
                    Posebnosti karte (odrasli, otroci, ...)
                </div>
                <div className={styles.right}>
                    <h2>5€</h2>
                    <p>Količina: </p>
                    <p>Znesek: </p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.skupParent}>
    <p className={styles.skup}> Skupni znesek: </p>
    </div>
    <div className={styles.buttonparent}>
      <a href="/vsekarte" className={styles.button}>Nadaljuj na plačilo</a>
      </div>

      <h1 className={styles.carouselname}>Še par dogodkov, ki te bodo morda zanimali...</h1>
      <Carousel defaultControlsConfig={{nextButtonText: '->', prevButtonText: '<-', pagingDotsStyle: {fill: 'none'}}} className={styles.carousel} slidesToShow={4}>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
      </Carousel>
    </div>
    </Layout>
)
}