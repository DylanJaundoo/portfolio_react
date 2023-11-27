import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? "border-b border-blue-600" : " text-[#ADB7BE]"
  return (
    <button onClick={selectTab}>
        <p className={`font-semibold italic ${buttonClasses}`}></p>
        
        {children}
        </button>
    
  )
}

export default TabButton
