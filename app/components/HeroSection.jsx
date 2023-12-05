"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12 py-4'>
        <motion.div initial={{opacity:0, scale:0.5 }} animate={{opacity:1,scale:1 }} transition={{duration:2.5}} className="col-span-7 place-self-center text-center lg:text-center">
        <h1 className="text-white mb-4 text-4xl  sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I'm {" "}
            </span>
            <br />
            <TypeAnimation
            sequence={[
                'Dylan Jaundoo',
                2000,
                'A Web Developer',
                2200,
            ]}
            wrapper='span'
            speed={20}
            
            repeat={Infinity}
            />
        </h1>
        <p className='text-[#ADB7BE] text-base  mb-6 sm:text-lg lg:text-xl'>
        Welcome to my re-vamped front-end portfolio. Built using <br /> 
        <b>React,</b> <b>Next.js,</b> and <b>Tailwind</b>. 
        </p>
        <div>
            <button className='px-6 py-3 rounded-full  w-full sm:w-fit mr-4 bg-gradient-to-br from-primary-500 via-indigo-500 to-secondary-500 hover:bg-slate-200 text-black'>Hire Me</button>
            <button className='px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-primary-500 via-indigo-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                    CV/Resume
                    </span>
                </button>

        </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.5, x:100}} animate={{opacity:1, scale:1, x:0}} transition={{duration:2.5}} className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative hover:grayscale">
            <Image 
                src="/images/myproject.png"
                alt='hero image'
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={200}
                height={200}
            />
            </div>
        </motion.div>
    </div>
    </section>
  )
}

export default HeroSection
