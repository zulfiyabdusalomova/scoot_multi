import React from 'react';
import { Button, Text } from '../../../common';

export const Easy = () => {
    return (
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='mb-[24px] text-[48px] font-[700] leading-[48px] text-black mt-[-150px]'>
                        Easy to use <br />
                        riding telemetry
                    </h2>
                    <Text styles="mb-[40px]">
                        The Scoot app is available with riding telemetry.
                        This means <br /> it can show you your average speed,
                        how long you've been <br /> using the scooter, your traveling
                        distance, and many more <br /> things all in an easy to use app.
                    </Text>
                    <Button styles="px-[44.5px]">Learn More</Button>
                </div>
                <div className='pb-[160px]'>
                    <img src="/public/mock-images/home/boyPhone.png" alt="" className='rounded-[50%] w-[445px] h-[445px]' />
                </div>
            </div>
            <div className='flex justify-between  items-center'>
                <div className='pb-[160px]'>
                    <img src="/public/mock-images/home/city.png" alt="" className='rounded-[50%] w-[445px] h-[445px]' />
                </div>
                <div>
                    <h2 className='mb-[24px] text-[48px] font-[700] leading-[48px] text-black mt-[-150px]'>
                        Coming to a city <br /> near you
                    </h2>
                    <Text styles="mb-[40px]">
                        Scoot is available in 4 major cities so far.
                        We’re expanding <br /> rapidly, so be sure to let us
                        know if you want to see us in <br /> your hometown.
                        We’re aiming to let our scooters loose on 23 <br />
                        cities over the coming year.
                    </Text>
                    <Button styles="px-[44.5px]">Learn More</Button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='mb-[24px] text-[48px] font-[700] leading-[48px] text-black mt-[-150px]'>
                        Zero hassle <br /> payments
                    </h2>
                    <Text styles="mb-[40px]">
                        Our payment is as easy as one two three.
                        We accept most <br /> credit cards and debit cards.
                        You can also link your PayPal <br /> account inside the app.
                        Need to pay later? No worries! You <br /> can defer payment
                        for up to a month.
                    </Text>
                    <Button styles="px-[44.5px]">Learn More</Button>
                </div>
                <div className='pb-[160px]'>
                    <img src="/public/mock-images/home/barset.png" alt="" className='rounded-[50%] w-[445px] h-[445px]' />
                </div>
            </div>
        </div>
    )
};