import React from 'react'
import { Text } from '../../../common/text/Text';

export const Lpe = () => {
    return (
        <div className='container'>
            <div className='flex justify-around pt-[160px] pb-[147px] gap-[30px] md:flex-none'>
                <div>
                    <img src="/public/mock-images/home/icon1.svg" alt="" className='w-[96px] h-[96px]' />
                    <p className='text-[24px] font-[700] leading-[28px] text-[#495567] mt-[40px] mb-[27px]'>
                        Locate with app
                    </p>
                    <Text>
                        Use the app to find the nearest scooter to you. <br />
                        We are continuously placing scooters in the <br /> areas
                        with most demand, so one should never <br /> be too far away.
                    </Text>
                </div>
                <div>
                    <img src="/public/mock-images/home/icon2.svg" alt="" className='w-[96px] h-[96px]' />
                    <p className='text-[24px] font-[700] leading-[28px] text-[#495567] mt-[40px] mb-[27px]'>
                        Pick your scooter
                    </p>
                    <Text>
                        We show the most important info for the <br /> scooters
                        closest to you. So you know how much <br /> charge they
                        have left and can see roughly how <br /> much it will cost.
                    </Text>
                </div>
                <div>
                    <img src="/public/mock-images/home/icon3.svg" alt="" className='w-[96px] h-[96px]' />
                    <p className='text-[24px] font-[700] leading-[28px] text-[#495567] mt-[40px] mb-[27px]'>
                        Enjoy the ride
                    </p>
                    <Text>
                        Scan the QR code and the bike will unlock. <br />
                        Retract the cable lock, put on a helmet, and <br /> you’re
                        off! Always lock bikes away from <br /> walkways and accessibility ramps.
                    </Text>
                </div>
            </div>
        </div>
    )
};