import React from 'react'
import servicenowLogo from '../img/servicenow_logo_icon_168835.png'
import { motion } from "framer-motion"
import Image from 'next/image'


type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
        <motion.img
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }} 
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={servicenowLogo.src} alt=''/>
    
        <div className='px-0 md:px-10'>
           <h4 className='text-4xl font-light'>Software Engineer</h4>
           <p className='font-bold text-2xl mt-1'>CrowdhubApps</p>
           <div className='flex space-x-2 my-2'>
               {/*tech uses*/}
               <Image/>
               {/*tech uses*/}
               {/*tech uses*/}
               {/*tech uses*/}
            </div>

            <p>Started work... - Ended....</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>job resposibilities and test string</li>
                <li>job resposibilities and test string</li>
                <li>job resposibilities and test string</li>
                <li>job resposibilities and test string</li>
                <li>job resposibilities and test string</li>
            </ul>

        </div>
    
    
    
    </article>
  )
}

export default ExperienceCard