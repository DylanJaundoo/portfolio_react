import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({imgURL, title, description,gitURL,deployURL}) => {
  return (
    <div className='hover:scale-105 px-10'>
      <div 
      className='h-52 md:h-80 rounded-t-xl relative group'
      style={{background:`url(${imgURL})`, backgroundSize:"cover"}}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-700'>
          <Link href={gitURL} target='_blank' className='h-14 w-14 border-2 mr-4 relative rounded-full border-white hover:border-[#00FFFF]'>
            <CodeBracketIcon className='h-10 w-10  text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white'/>
          </Link>
          <Link href={deployURL} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-white hover:border-[#00FFFF]'>
            <EyeIcon className='h-10 w-10  text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white'/>
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
