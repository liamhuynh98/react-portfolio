import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5}}
      className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
       Experience
     </h3>
     <div>
       {/*experience card*/}
       <ExperienceCard/>

       {/*experience card*/}
       <ExperienceCard/>

       {/*experience card*/}
       <ExperienceCard/>

       {/*experience card*/}
       <ExperienceCard/>

     </div>
    </motion.div>
  )
}

export default WorkExperience