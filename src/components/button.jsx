import React from 'react'

export const CustomButton = ({children, bgColor, color}) => {
    
  return (
   <button className='customBtn' style={{"--bg" : bgColor, "--color" : color}}>
        {children}
   </button>
  )
}
