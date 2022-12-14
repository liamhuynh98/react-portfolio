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
import arrowUp from '../img/up-chevron.png'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocials } from "../utils/fetchSocials"



type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <>
    <Particle/>   
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-1 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7ab0a]/80' >
        <Head>
          <title>{pageInfo?.name} Portfolio</title>
        </Head>

        {/*Header*/}
        <Header socials={socials} />
 
        {/*Hero*/}
        <section id = "hero" className='snap-start'>
          <Hero pageInfo={pageInfo} /> 
        </section>

        {/*About*/}
        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section>

        {/*Experience*/}
        <section id='experience' className='snap-center'>
          <WorkExperience experiences={experiences}/>
        </section>

        {/*Skills*/}
        <section id='skills' className='snap-start'>
          <Skills skills={skills} />
        </section>

        {/*Project*/}
        <section id='projects' className='snap-start'>
          <Projects projects={projects} />
        </section>

        {/*Contacts*/}
        <section id='contact' className='snap-start'>
          <ContactMe pageInfo={pageInfo} />
        </section>

        <Link href={'#hero'}>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image height={10} width={10} className='w-7 h-7 rounded-full cursor-pointer animate-bounce' src={arrowUp.src} alt=''/>
            </div>
          </footer>
        </Link> 

      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    //nextjs will attempt to re-generate the page:
    //when a request comes in at most every ** seconds

    revalidate: 10,
  };
};
