import React from 'react';
import { Text } from '../../common';

export const Footer = () => {
  return (
    <div>
      <div className='py-[102px] px-[165px] bg-[#495567] flex  gap-[336px]  items-center'>
        <div>
          <h2 className='text-[48px] font-[700] leading-[48px] text-white '>
            Sign up and <br /> Scoot off today
          </h2>
        </div>
        <div className='flex justify-between gap-[18px]'>
          <img src="/public/mock-images/footer/AppStore.svg" alt="" className='w-[159px] h-[56px]' />
          <img src="/public/mock-images/footer/GooglePlay.svg" alt="" className='w-[182px] h-[56px]' />
        </div>
      </div>
      <div className='py-[34px] px-[168.6px] bg-[#333A44] flex items-center'>
          <div className='mr-[58.85px]'>
            <img src="/public/mock-images/footer/scoot.svg" alt="" />
          </div>
          <div className='flex justify-around items-center gap-[32px] mr-[571px]'>
            <Text>About</Text>
            <Text>Location</Text>
            <Text>Careers</Text>
          </div>
          <div>
            <img src="/public/mock-images/footer/all.svg" alt="" className='w-[120px] h-[24px]' />
          </div>
      </div>
    </div>
  )
}
