import React from 'react';
import { Button, Text } from '../../common';

export const Navbar = () => {
  return (
    <div className='container'>
      <div className='flex items-center py-[22px]'>
        <div>
          <img src="/public/mock-images/home/scoot.svg" alt="" className='mr-[58.18px]' />
        </div>
        <div className='flex items-center gap-[32px] mr-[511px]'>
          <Text styles="font-[700]">About</Text>
          <Text styles="font-[700]">Location</Text>
          <Text styles="font-[700]">Careers</Text>
        </div>
        <div>
          <Button>Get Scootin</Button>
        </div>
      </div>
    </div>
  )
};