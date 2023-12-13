import React from 'react'
import { Text } from '../../../common/text/Text'
import { Button } from '../../../common/button/Button'

export const CareJoin = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between items-center pt-[100px]'>
                    <div>
                        <h2 className='mb-[24px] text-[48px] font-[700] leading-[48px] text-black mt-[-150px]'>
                            Care to join our <br /> mission?
                        </h2>
                        <Text styles="mb-[40px]">
                            We’re always looking for ambitious individuals
                            to help us on <br /> our journey. If you’re passionate
                            about our mission to <br /> provide clean, accessible
                            transport to improve urban living <br /> we want to
                            hear from you!
                        </Text>
                        <Button styles="px-[44.5px]">Say Hello</Button>
                    </div>
                    <div className='pb-[160px]'>
                        <img src="/public/mock-images/careers/job.png" alt="" className='rounded-[50%] w-[445px] h-[445px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
