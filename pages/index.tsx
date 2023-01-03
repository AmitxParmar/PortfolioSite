/* eslint-disable react/no-unescaped-entities */
import About from 'components/About';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Skills from 'components/Skills';
import WorkExperience from 'components/WorkExperience';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>

      <Head>
        <title>Amit&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>


    </div>
  );
}
