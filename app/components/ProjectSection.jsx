import React from 'react';
import ProjectCard from './ProjectCard';

const projectData =[
    {
        id:1,
        title:"GPT-3 Design",
        description: "Frontend design using React, following Figma schema.",
        image: "/images/projects/gpt3-image.png",
        gitURL: "https://github.com/DylanJaundoo/ChatGPT3",
        deployURL: "https://github.com/DylanJaundoo/ChatGPT3"
    },
    {
        id:2,
        title:"First Website (Outdated)",
        description: "First attempt at building a website using Vanilla HTML/CSS",
        image: "/images/projects/portfolio1-image.png",
        gitURL: "https://github.com/DylanJaundoo/Front-End-Portfolio",
        deployURL: "https://front-end-portfolio-azure.vercel.app/"
    },
    {
        id:3,
        title:"Pricing Card",
        description: " Pricing card design challenge from FrontEnd Mentor",
        image: "/images/projects/pricingcard-image.png",
        gitURL: "https://github.com/DylanJaundoo/pricing-card-frontend-mentor-challenge/tree/github-pages",
        deployURL: "https://pricing-card-frontend-mentor-challenge-seven.vercel.app/"
    },
    {
        id:4,
        title:"Fitness Blog",
        description: "Blog using React and API's (Under Construction)",
        image: "/images/projects/fitnessblog-image.jpg",
        gitURL: "/",
        deployURL: "/"
    },
]

const ProjectSection = () => {
  return (
    <>
        <h1 className='text-center text-4xl text-white font-bold mt-4 hover:scale-90'>My Projects</h1>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12  mx-3 mt-4' >
            {projectData.map((project)=>
             <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgURL={project.image}
            gitURL={project.gitURL}
            deployURL={project.deployURL}
            />
            )}
        </div>
    </>
  )
}

export default ProjectSection
