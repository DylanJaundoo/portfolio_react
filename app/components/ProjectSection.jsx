import React from 'react';
import ProjectCard from './ProjectCard';

const projectData =[
    {
        id:1,
        title:"GPT-3 Design",
        description: "Frontend Design using React re-usable components",
        image: "/images/projects/gpt3-image.png",
    },
    {
        id:2,
        title:"First Website (Outdated)",
        description: "First attempt at building a website using Vanilla HTML/CSS",
        image: "/images/projects/portfolio1-image.png",
    },
    {
        id:3,
        title:"Pricing Card",
        description: " Pricing card design challenge from FrontEnd Mentor",
        image: "/images/projects/pricingcard-image.png",
    },
    {
        id:4,
        title:"Fitness Blog",
        description: "Blog using React and API's (Under Construction)",
        image: "/images/projects/fitnessblog-image.jpg",
    },
]

const ProjectSection = () => {
  return (
    <>
        <h1 className='text-center text-4xl text-white font-bold mt-4 '>My Projects</h1>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 mt-4'>
            {projectData.map((project)=>
             <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgURL={project.image}
            />
            )}
        </div>
    </>
  )
}

export default ProjectSection
