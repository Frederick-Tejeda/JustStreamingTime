import Link from 'next/link';
import Image from 'next/image'
import styles from './styles/Home.module.css';
import axios from 'axios'

import Navbar from './components/navbar.js'
import Trailer from './components/trailer.js'

const Home = () => {

  return (
    <>
        <section id="trailer">
            <Navbar />
            <Trailer />
        </section>
        <section>
            
        </section>
        <section>
            
        </section>
    </>
  );
};

export default Home;
