import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div transition ={{ duration: 1.5 }} initial = {{ x: -500, opacity: 0, scale: 0.5}} animate = {{ x: 0, opacity: 1, scale:1 }} className='flex flex-row items-center'>
            {/*For Social Icons*/}
            <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </div>
    </header>
  )
} 

export default Header 