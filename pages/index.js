import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
<<<<<<< HEAD
=======
import CarouselCard from "../components/carouselcard";
import Layout from '../components/layout';
>>>>>>> main

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Navbar></Navbar>
<<<<<<< HEAD
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1>
          <a href='/login'>Prijava</a>
        </h1>
        <h1>
          <a href='/register'>Registracija</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
=======
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
>>>>>>> main
        </div>
      </section>
    </div>
    </Layout>
  )
}