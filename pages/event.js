import styles from '../styles/event.module.css';
import Link from 'next/link';
import { React, useState } from 'react'
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import Carousel from 'nuka-carousel'
import CarouselCard from "../components/carouselcard";
   
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
                        <button className={styles.button} onClick={decrease}>-</button> 
                        <button className="counter__output" id={styles.counterNum}>{counter}</button>
                        <button className={styles.button} onClick={increase}>+</button>
                    </div>                    
                    <a href="/cart"><button className={styles.kupi}>Kupi Zdaj</button></a>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.opisbody}>
        <div className={styles.opis}>
            <h2 className={styles.naslov}>Kratek opis dogodka</h2>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare elementum risus nec sagittis. In hac habitasse platea dictumst. Suspendisse vehicula libero eu magna luctus, vel interdum nunc commodo. 
            </div>
        </div>
        <div className={styles.carousel}>
            <Carousel defaultControlsConfig={{nextButtonText: '->', prevButtonText: '<-', pagingDotsStyle: {fill: 'none'}}}>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </Carousel>
        </div>
    </div>

    <div className={styles.podatkidogodek}>
        <div className={styles.opisdogodek}>
            <h2 className={styles.naslov}>Podatki o dogodku</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p>Lokacija dogodka</p>
                    <p>Čas začetka dogodka</p>
                    <p>Cena vstopnice</p>
                    <p>Starostna omejitve</p>
                    <p>Podatek 5?</p>
                </div>
                <div className={styles.column}>
                    <p>API podatek</p>
                    <p>API podatek</p>
                    <p>API podatek</p>
                    <p>API podatek</p>
                    <p>API podatek</p>
                </div>
            </div>
        </div>
    </div>

    <div className={styles.podatkiorganizator}>
        <div className={styles.opisorg}>
            <h2 className={styles.naslov}>Podatki o organizatorju</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p>Ime organizatorja</p>
                    <p>Naslov sedeža</p>
                    <p>e-poštni naslov</p>
                    <p>Podatek 4?</p>
                    <p>Podatek 5?</p>
                </div>
                <div className={styles.column}>
                    <p>API podatek</p>
                    <p>API podatek</p>
                    <p>API podatek</p>
                    <p>API podatek</p>
                    <p>API podatek</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
    </Layout>
)
}