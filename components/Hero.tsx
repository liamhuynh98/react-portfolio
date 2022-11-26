import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircles'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I go by ${pageInfo.name}`,
            "제 이름은 리암 입니다",
            "你好, 我的名字是 Liam"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/*<BackgroundCircle/> */}
        <Image className="relative rounded-full mx-auto object-cover" src={urlFor(pageInfo?.heroImage).url()} alt="" width={200}height={200}/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] animate-bounce'>{pageInfo.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>
                    {text} 
                </span>
                <Cursor cursorColor='#F7AB0A'/>

            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>

                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>

                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>  
                </Link>

                <Link href='#projects' >
                    <button className='heroButton'>Projects</button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Hero