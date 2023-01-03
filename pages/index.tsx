/* eslint-disable react/no-unescaped-entities */
import WorkExperience from 'components/WorkExperience';
import Head from 'next/head';

import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Amit's Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='about' className='snap-center'>
        <WorkExperience />
      </section>


    </div>
  );
}
