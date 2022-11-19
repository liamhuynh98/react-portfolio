import React from 'react'
import { motion } from "framer-motion"
import codingScreenPic from '../img/codingScreen.png'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial = {{ opacity: 0}} whileInView ={{ opacity: 1 }} transition = {{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img initial ={{ x: -200 }} transition={{ duration: 1.2 }} whileInView={{ x: 0 }} viewport={{ once: true }} src={codingScreenPic.src} className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
              Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background  
            </h4>
            <p className='text-base'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    </motion.div>
  )
}

export default About  