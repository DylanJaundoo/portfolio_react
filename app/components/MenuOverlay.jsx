import React from 'react';
import NavLinks from './NavLinks';

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
       {
       links.map ((links,index) => (
        <li key={index}>
        <NavLinks href={links.path} title={links.title} />
        </li>
       ))
    }
    </ul>
   
  )
}

export default MenuOverlay
