import { lookup } from 'dns';
import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I go by Liam",
            "I'm a coffee lover",
            "also learning how to code"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle/>
        <Image className="relative rounded-fill h-32 w-32 mx-auto object-cover" src="/react-portfolio/img/Okii.png" alt="" width={500} height={500}/>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1>
                <span>
                    {text}
                </span>
                <Cursor cursorColor='#F7AB0A'/>

            </h1>
        </div>
    </div>
  )
}

export default Hero