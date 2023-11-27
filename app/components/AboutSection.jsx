"use client";
import React, { useTransition } from 'react';
import Image from "next/image";
import { useState } from 'react';
import TabButton from './TabButton';

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


const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section className='text-white'>
        <div className=' md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16'>
            <Image className='rounded-md hover:grayscale' src="/images/about-image.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <span className=' text-4xl font-bold mb-4'>About Me</span>
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

export default AboutSection
