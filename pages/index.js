import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
import CarouselCard from "../components/carouselcard";
import Layout from '../components/layout';
import Carousel from 'nuka-carousel'
import { Cabin } from '@next/font/google'

const cabin = Cabin({
  subsets: ['latin'],
})

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
      <Carousel defaultControlsConfig={{nextButtonText: '->', prevButtonText: '<-', pagingDotsStyle: {fill: 'none'}}} nextButtonClassName="next" className={styles.carousel} slidesToShow={4}>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
      </Carousel>


      <h1 className={styles.carouselname}>Trust</h1>
      <Carousel defaultControlsConfig={{nextButtonText: '->', prevButtonText: '<-', pagingDotsStyle: {fill: 'none'}}} className={styles.carousel} slidesToShow={4}>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
      </Carousel>


      <h1 className={styles.carouselname}>KMŠ</h1>
      <Carousel defaultControlsConfig={{nextButtonText: '->', prevButtonText: '<-', pagingDotsStyle: {fill: 'none'}}} className={styles.carousel} slidesToShow={4}>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
        <a href="/event"><CarouselCard /></a>
      </Carousel>
      <div className={styles.buttonparent}>
      <a href="/vsekarte" className={styles.button}>Vsi Dogodki</a>
      </div>
      </section>
    </div>
    </Layout>
  )
}