import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'


type Props = {
  experience: Experience;
}
export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[700px] h-[500px] md:h-[600px] xl:h-[900px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-blue-500 shadow-lg hover:shadow-blue-500 hover:skew-x-1 '>
        <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }} 
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center shadow-xl shadow-rose-500' src={urlFor(experience?.companyImage).url()} alt=''/>
    
        <div className='px-0 md:px-10'>
           <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
           <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
           <div className='flex space-x-2 my-2'>
              {experience.technologies.map(technology => (
                <img key={technology._id} className="h-10 w-10 rounded-full" src={urlFor(technology.image).url()}/>
              ))}
            </div>

            <p className='uppercase py-5 text-gray-300'>
              {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>

            {/*make the list scrollable, set a height make it scrollable */}
            <ul 
            className='list-disc space-y-4 ml-5 pr-5 text-lg max-h-96 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-96 overflow-y-scroll '>
            {experience.points.map((point, i) =>(
                  <li key={i}>{point}</li>
                ))}
            </ul>

        </div>
    
    
    
    </article>
  )
}
