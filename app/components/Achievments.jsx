"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedText = dynamic(() => {return import("react-animated-numbers")}, {ssr:false});

const Achievments = () => {
const AchievmentsList = [
    {
        title:"Experience",
        value:"2",
        postfix:" years"
    },
    {
        title:"Projects",
        value:"5",
        postfix:"+"
    },
    {
        title:"Certifications",
        value:"3"
    },
  
]
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-grey border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
      {AchievmentsList.map((achievement,index) => {
        return (
            <div key={index} className='flex flex-col items center justify-center mx-4'>
                <h2 className='text-white text-4xl font-bold flex flex-row'>
                <AnimatedText
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 2,
                      friction: 50,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
                </h2>
                <p className='text-[#ADB7BE] text-base'>{achievement.title}</p>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Achievments
