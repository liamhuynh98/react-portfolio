import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Particle from '../components/Particle'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import Image from 'next/image'
import okiImage from '../img/Okii.png'

export default function Home() {
  return (
    <>
    <Particle/>   
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-1 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7ab0a]/80' >
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
        <section id='projects' className='snap-start'>
          <Projects/>
        </section>

        {/*Contacts*/}
        <section id='contact' className='snap-start'>
          <ContactMe/>
        </section>

        <Link href={'#hero'}>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image height={10} width={10} className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src={okiImage} alt=''/>
            </div>
          </footer>
        </Link> 
        
      </div>
    </>
  )
}
