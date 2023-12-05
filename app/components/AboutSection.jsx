"use client";
import React, { useTransition } from 'react';
import Image from "next/image";
import { useState } from 'react';
import TabButton from './TabButton';
import { useRef } from 'react';
import { motion,useInView } from 'framer-motion';

const TabData = [
  {
    title:"Skills",
    id: "skills",
    content:(
      <ul className='list-disc pl-2'>
        <li>Javascript</li>
        <li>TailWind-CSS</li>
        <li>React.js</li>
        <li>Git/Github</li>
        <li>Figma</li>
      </ul>
    )
  },
  {
    title:"Education",
    id: "education",
    content:(
      <ul className='list-disc pl-2'>
        <li>NYC College of Technology</li>
        <li>Bachelors in Computer Systems - BTech</li>   
      </ul>
    ) 
  },
  {
    title:"Certifications",
    id: "certifications",
    content:(
      <p>Under Construction</p>
    ) 
  },
  
]


  const cardVariants = {
    intial:{x:50, opacity:0},
    animate:{x:0, opacity:1},

}


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const [tab,setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  


  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  
  return (
    <section id='about'>
        <div className=' md:grid md:grid-cols-2 gap-1 items-center py-8 sm:py-16'>
            <Image className='rounded-md hover:grayscale' src="/images/about-image.png" width={500} height={400}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col justify-end h-full'>
              <motion.div
              variants={cardVariants}
              intial="initial"
              animate={isInView ? "animate": ""}
              transition={{duration:4}}>
            <h1>
              <span className='  text-lg md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>About Me {" "}
              </span>
            </h1>
            </motion.div>
                <p className='text-base lg:text-lg'> Hi, my name is Dylan Jaundoo I am a passionate web devleoper, born and raised in Queens, NY. I enjoy the creative process of designing and producing websites as well as the rational nature of coding. In the future I would like to venture beyond web design into mobile applications and game design. Check out my work below, and feel free to contact me if you need any additional information. </p>
             
            <div className='flex flex-row mt-8 justify-around'>
              <TabButton selectTab={()=>handleChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>  
              <TabButton selectTab={()=>handleChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>  
              <TabButton selectTab={()=>handleChange("certifications")} active={tab==="certifications"}>{" "}Certifications{" "}</TabButton>  
              </div>
              <div className='mt-8'>
                {TabData.find((t) =>t.id === tab ).content}
              </div>
            </div>
        </div>
    </section>
  )
  }

export default AboutSection;
