import styles from '../styles/event.module.css';
import Link from 'next/link';
import { React, useState } from 'react'
import Navbar from '../components/navbar';
import Layout from '../components/layout';
   
export default function Event() {
    const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    if(counter!=0){
    setCounter(count => count - 1);
    }
  };
return (
    <Layout>
    <div className={styles.container}>
    <Navbar></Navbar>
    <section id={styles.top}>
    <div className={styles.top}>
        <div className={styles.toptext}><h1>Ime Dogodka</h1></div>
    </div>
    <div className={styles.buycard}>
        <div className={styles.right}>
            <h2>Ime dogodka</h2>
            <p>Lokacija cas datum</p>
            Posebnosti karte (odrasli, otroci, ...)
        </div>
        <div className={styles.right}>
            <h2>5€</h2>
            <div className={styles.counter}>
                Količina:
                <button onClick={decrease}>-</button> 
                <button className="counter__output">{counter}</button>
                <button onClick={increase}>+</button>
            </div>
        </div>
    </div>
    </section>
    </div>
    </Layout>
)
}