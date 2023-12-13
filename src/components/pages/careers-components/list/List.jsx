import React from 'react'
import { Button } from '../../../common/button/Button'
import { Text } from '../../../common/text/Text'

export const List = () => {
    return (
        <div className='mb-[160px]'>
            <div className='container'>
                <div className='bg-[#F2F5F9] pl-[40px] pr-[64px] pt-[32px] pb-[35px] flex justify-between mb-[24px]'>
                    <div>
                        <p className='text-[24px] font-[700] leading-[28px] text-black mb-[5px]'>
                            General Manager
                        </p>
                        <Text styles="text-black">Jakarta, Indonesia</Text>
                    </div>
                    <div>
                        <Button>Apply</Button>
                    </div>
                </div>
                <div className='bg-[#F2F5F9] pl-[40px] pr-[64px] pt-[32px] pb-[35px] flex justify-between mb-[24px]'>
                    <div>
                        <p className='text-[24px] font-[700] leading-[28px] text-black mb-[5px]'>
                            UI/UX Designer
                        </p>
                        <Text styles="text-black">Yokohama, Japan</Text>
                    </div>
                    <div>
                        <Button>Apply</Button>
                    </div>
                </div>
                <div className='bg-[#F2F5F9] pl-[40px] pr-[64px] pt-[32px] pb-[35px] flex justify-between mb-[24px]'>
                    <div>
                        <p className='text-[24px] font-[700] leading-[28px] text-black mb-[5px]'>
                            Blog Content Copywriter
                        </p>
                        <Text styles="text-black">New York, United States</Text>
                    </div>
                    <div>
                        <Button>Apply</Button>
                    </div>
                </div>
                <div className='bg-[#F2F5F9] pl-[40px] pr-[64px] pt-[32px] pb-[35px] flex justify-between mb-[24px]'>
                    <div>
                        <p className='text-[24px] font-[700] leading-[28px] text-black mb-[5px]'>
                            Graphic Designer
                        </p>
                        <Text styles="text-black">New York, United States</Text>
                    </div>
                    <div>
                        <Button>Apply</Button>
                    </div>
                </div>
                <div className='bg-[#F2F5F9] pl-[40px] pr-[64px] pt-[32px] pb-[35px] flex justify-between mb-[24px]'>
                    <div>
                        <p className='text-[24px] font-[700] leading-[28px] text-black mb-[5px]'>
                            Fleet Supervisor
                        </p>
                        <Text styles="text-black">Jakarta, Indonesia</Text>
                    </div>
                    <div>
                        <Button>Apply</Button>
                    </div>
                </div>
                <div className='bg-[#F2F5F9] pl-[40px] pr-[64px] pt-[32px] pb-[35px] flex justify-between mb-[24px]'>
                    <div>
                        <p className='text-[24px] font-[700] leading-[28px] text-black mb-[5px]'>
                            UX Analyst
                        </p>
                        <Text styles="text-black">London, United Kingdom</Text>
                    </div>
                    <div>
                        <Button>Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
