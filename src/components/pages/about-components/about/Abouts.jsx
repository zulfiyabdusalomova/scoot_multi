import React from 'react'

export const Abouts = () => {
  return (
    <div style={{ backgroundImage: `url(/mock-images/about/street.png)`, backgroundRepeat: `no-repeat` }} className='bg-cover'>
      <div className='w-[100%] h-[100%] bg-[#2F3B59] bg-opacity-[0.7]'>
        <div className='container'>
          <h2 className='text-[56px] font-[700]  leading-[56px] text-white pt-[62px] pb-[100px]'>
            About
          </h2>
        </div>
      </div>
    </div>
  )
}
