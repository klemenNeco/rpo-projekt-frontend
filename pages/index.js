import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
import CarouselCard from "../components/carouselcard";
import Layout from '../components/layout';
import Carousel from 'nuka-carousel'
import { Cabin } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Err500 from '../components/err500'

const cabin = Cabin({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <Layout>
      <Err500 />
    </Layout>
  )
}