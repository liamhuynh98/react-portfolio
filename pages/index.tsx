import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Particle from '../components/Particle'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
    <Particle/>
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-1' >
        <Head>
          <title>Liam's Portfolio</title>
        </Head>

        {/*Header*/}
        <Header />

        {/*Hero*/}
        <section id = "hero" className='snap-start'>
          <Hero /> 
        </section>

        {/*About*/}
        <section id='about' className='snap-center'>
          <About />
        </section>

        {/*Experience*/}
        <section id='experience' className='snap-center'>
          <WorkExperience/>
        </section>

        {/*Skills*/}
        <section id='skills' className='snap-start'>
          <Skills/>
        </section>

        {/*Project*/}

        {/*Contacts*/} 

      </div>
    </>
  )
}
