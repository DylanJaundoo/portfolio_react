"use client";
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title:"Home",
        path:"#home"
    },
  { 
     title:"About",
    path:"#about",
 },
 { 
    title:"Projects",
   path:"#projects",
},
{ 
    title:"Contact",
   path:"#contact",
}
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] md:scroll-smooth ">
        <div className="flex flex-wrap item-center justify-between mx-auto px-4 py-2  ">
            <Link href={"/"} className='text-xl md:text-5xl text-white font-semibold mt-3 ml-6'>Dylan.</Link>
           <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 lg:p-0 md:flex-row md:space-x-8 mt-7 mr-10'>
                    {
                        navLinks.map((item,index) => (
                            <li key={index}>
                                <NavLinks href={item.path} title={item.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar;
