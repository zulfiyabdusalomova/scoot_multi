import React from 'react';
import { Button, Text } from '../../../common';

export const Header = () => {
  return (
    <div style={{ backgroundImage: `url(/mock-images/home/Bitmap.png)`, backgroundRepeat: `no-repeat` }} className='bg-cover'>
      <div className='w-[100%] h-[100%] bg-[#2F3B59] bg-opacity-[0.7]'>
        <div className='container'>
          <h2 className='text-[56px] font-[700] leading-[56px] mb-[40px] text-white pt-[153px] lg:text-start md:text-center '>
            Scooter sharing <br /> made simple
          </h2>
          <Text styles="ml-[95px] mb-[40px] text-white lg:text-start md:text-center">
            Scoot takes the hassle out of urban mobility.
            Our bikes <br /> are placed in convenient locations
            in each of our cities. <br /> Use our app to locate
            the nearest bike, unlock it with a <br /> tap, and you’re away!
          </Text>
          <div className='lg:text-start md:text-center'>
            <Button styles="ml-[95px] mb-[152px]">Get Scootin</Button>
          </div>
        </div>
      </div>
    </div>
  )
};