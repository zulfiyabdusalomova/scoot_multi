import React from 'react'
import { Text } from '../../../common/text/Text'
import { Button } from '../../../common/button/Button'

export const Mobile = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between items-center pt-[100px]'>
                    <div>
                        <h2 className='mb-[24px] text-[48px] font-[700] leading-[48px] text-black mt-[-150px]'>
                            Mobility for the <br /> digital era
                        </h2>
                        <Text styles="mb-[40px]">
                            Getting around should be simple (and even fun!)
                            for <br /> everyone. We embrace technology to provide
                            low cost, smart <br /> access to scooters at your fingertips.
                        </Text>
                    </div>
                    <div className='pb-[160px]'>
                        <img src="/public/mock-images/about/girl.png" alt="" className='rounded-[50%] w-[445px] h-[445px]' />
                    </div>
                </div>
                <div className='flex justify-between  items-center'>
                    <div className='pb-[160px]'>
                        <img src="/public/mock-images/about/bus.png" alt="" className='rounded-[50%] w-[445px] h-[445px]' />
                    </div>
                    <div>
                        <h2 className='mb-[24px] text-[48px] font-[700] leading-[48px] text-black mt-[-150px]'>
                            Better urban <br /> living
                        </h2>
                        <Text styles="mb-[40px]">
                            We’re helping connect cities and bring people
                            closer <br /> together. Our scooters are also fully-electric
                            and we offset <br /> the minimal carbon footprint for each ride.
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
