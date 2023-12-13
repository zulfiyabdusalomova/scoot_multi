import React from 'react'
import { Text } from '../../../common/text/Text'

export const OurValues = () => {
    return (
        <div className='mb-[120px]'>
            <div className='container'>
                <h2 className='text-[48px] font-[700]  leading-[48px] text-center mb-[25px] text-black'>
                    Our values
                </h2>
                <div className='flex items-center gap-[72px]'>
                    <div>
                        <img src="/public/mock-images/about/image1.png" alt="" />
                        <p className='text-[24px] leading-[28px] font-[700] mt-[32px] mb-[27px] text-black text-center'>
                            Our tech
                        </p>
                        <Text styles="text-center">
                            We’re using cutting edge technology to drive <br />
                            accessible urban transportation forward. Our <br />
                            fully electric scooters are a joy to ride!
                        </Text>
                    </div>
                    <div>
                        <img src="/public/mock-images/about/image2.png" alt="" />
                        <p className='text-[24px] leading-[28px] font-[700] mt-[32px] mb-[27px] text-black text-center'>
                            Our integrity
                        </p>
                        <Text styles="text-center">
                            We are fully committed to deliver a great yet <br /> safe,
                            sustainable micro-mobility experience in <br /> every
                            city we serve.
                        </Text>
                    </div>
                    <div>
                        <img src="/public/mock-images/about/image3.png" alt="" />
                        <p className='text-[24px] leading-[28px] font-[700] mt-[32px] mb-[27px] text-black text-center'>
                            Our community
                        </p>
                        <Text styles="text-center">
                            We support every community we serve. All <br />
                            workers are paid a living wage based on their <br />
                            location and are Scoot employees.
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
