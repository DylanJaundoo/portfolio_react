import React from 'react'

const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active ? "text-white border-t-2 border-pink-500 scale-110" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
          <p className={`mr-3 font-semibold hover:text-pink-300 hover:scale-105 ${buttonClasses}`}>
              {children}
        </p>
        </button>
    
  )
}

export default TabButton
