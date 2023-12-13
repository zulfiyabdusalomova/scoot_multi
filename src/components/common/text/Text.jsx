import React from 'react'

export const Text = ({children, styles}) => {
  return (
    <div className={`text-[15px] font-[400] leading-[25px] text-black-1 ${styles ? styles : ''}`}>
        {children}
    </div>
  )
}
