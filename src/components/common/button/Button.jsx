import React from 'react'

export const Button = ({children, styles}) => {
  return (
    <div>
      <button className={`text-[15px] font-[700] leading-[25px] text-center px-[39px] py-[14px] bg-orange text-white ${styles?styles:''}`}>
        {children}
        </button>
    </div>
  )
}
