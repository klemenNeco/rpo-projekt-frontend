import styles from '../styles/event.module.css';
import Link from 'next/link';
import { React, useState } from 'react'
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import Carousel from 'nuka-carousel'
   
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
                    
                    Količina:
                    <div className={styles.counter}>
                        <button onClick={decrease}>-</button> 
                        <button className="counter__output">{counter}</button>
                        <button onClick={increase}>+</button>
                        <button className={styles.kupi}>Kupi Zdaj</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.opisbody}>
        <div className={styles.opis}>
            <h2>Kratek opis dogodka</h2>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare elementum risus nec sagittis. In hac habitasse platea dictumst. Suspendisse vehicula libero eu magna luctus, vel interdum nunc commodo. 
            </div>
        </div>
        <div className={styles.carousel}>
            <Carousel defaultControlsConfig={{nextButtonText: '->', prevButtonText: '<-', pagingDotsStyle: {fill: 'none'}}} wrapAround={true}>
                <img src="https://cdn.britannica.com/85/139485-050-BCF84C18/FIFA-World-Cup-trophy.jpg" height={200}/>
                <img src="https://culturedvultures.com/wp-content/uploads/2022/08/Black-Clover.jpg" height={200} />
                <img src="/backgroundImg.png" />
                <img src="slike/backgroundImg.png" />
                <img src="/slike/backgroundImg.png" />
            </Carousel>
        </div>
    </div>
    </section>
    </div>
    </Layout>
)
}