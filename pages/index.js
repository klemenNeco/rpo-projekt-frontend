import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
import CarouselCard from "../components/carouselcard";
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Navbar></Navbar>
      <section id={styles.top}>
      <div className={styles.top}>
        <div className={styles.toptext}><h1>Vstopnice za vse prireditve. <br /> Na enem mestu</h1></div>
      </div>
      <h1 className={styles.carouselname}>Štuk</h1>
      <div className={styles.carousel}>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        </div>
      </section>
    </div>
    </Layout>
  )
}