'use client'
import React from 'react';
import Image from "next/image";
import { assets } from "@/Assests/assets";

const workData = [
  {
    title: "Project One",
    description: 'Web design',
    bgImage: "/work-1.png",
  },
  {
    title: "Project Two",
    description: 'Web design',
    bgImage: "/work-2.png",
  },
  {
    title: "Project Three",
    description: 'Web design',
    bgImage: "/work-3.png",
  },
  {
    title: "Project Four",
    description: 'Web design',
    bgImage: "/work-4.png",
  },
];

const Work = () => {
  return (
    <div id="My Work" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        My portfolio
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg flex flex-col justify-between p-4 group transition-shadow hover:shadow-lg"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
          
          <div className="">
  <div className="bg-white bg-opacity-50 p-2 rounded relative mt-36  translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ">
    {/* Icon at top-right */}
    <div className="absolute top-9 right-2 bg-green-400 rounded ">
      <Image src={assets.send_icon} alt="send icon" className="w-5 h-5" />
    </div>

    {/* Project title and description */}
    <h2 className="text-black text-xl font-bold">{project.title}</h2>
    <p className="text-black">{project.description}</p>
  </div>
</div>
          </div>
        ))}
      </div>

      <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700  rounded-full y-3 px-10 mx-auto my-20 hover:bg-black duration-500'>
        show more <Image src= {assets.right_arrow_bold} alt='right arrow' className='w-4'/>
      </a>
    </div>
  );
}

export default Work;
