import React from 'react'

const ProjectCard = ({imgURL, title, description}) => {
  return (
    <div>
      <div 
      className='h-52 md:h-72 rounded-t-xl relative group'
      style={{background:`url(${imgURL})`, backgroundSize:"cover"}}
      >
        <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-700'>
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
