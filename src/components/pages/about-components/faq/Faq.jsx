import React from 'react'
import { Text } from '../../../common/text/Text'

export const Faq = () => {
    return (
        <div className='pb-[160px]'>
            <div className='container'>
                <h2 className='text-center text-black text-[48px] font-[700] leading-[48px] mb-[64px]'>
                    FAQs
                </h2>
                <div className='flex justify-between mb-[64px]'>
                    <div>
                        <h2 className='text-center text-black text-[48px] font-[700] leading-[48px] mb-[64px]'>
                            How it works
                        </h2>
                    </div>
                    <div >
                        <div className='bg-[#F2F5F9] px-[40px] py-[32px] mb-[16px]'>
                            <p className='text-black leading-[28px] font-[700] text-[24px] mb-[24px]'>
                                How do I download the app?
                            </p>
                            <Text styles="text-black">
                                To download the Scoot app, you can search “Scoot”
                                in both the App and Google Play <br /> stores. An even
                                simpler way to do it would be to click the relevant
                                link at the bottom of <br /> this page and you’ll be
                                re-directed to the correct page.
                            </Text>
                        </div>
                        <div className='bg-[#F2F5F9] px-[40px] py-[32px] mb-[16px]'>
                            <p className='text-black leading-[28px] font-[700] text-[24px] mb-[24px]'>
                                Can I find a nearby Scoots?
                            </p>
                        </div>
                        <div className='bg-[#F2F5F9] px-[40px] py-[32px]'>
                            <p className='text-black leading-[28px] font-[700] text-[24px] mb-[24px]'>
                                Do I need a license to ride?
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-center text-black text-[48px] font-[700] leading-[48px] mb-[64px]'>
                            Safe driving
                        </h2>
                    </div>
                    <div >
                        <div className='bg-[#F2F5F9] px-[40px] py-[32px] mb-[16px]'>
                            <p className='text-black leading-[28px] font-[700] text-[24px] mb-[24px]'>
                                Should I wear a helmet?
                            </p>
                            <Text styles="text-black">
                                Yes, please do! All cities have different laws.
                                But we strongly strongly strongly <br /> recommend
                                always wearing a helmet regardless of the local
                                laws. We like you and we <br /> want you to be as safe
                                as possible while Scooting.
                            </Text>
                        </div>
                        <div className='bg-[#F2F5F9] px-[40px] py-[32px] mb-[16px]'>
                            <p className='text-black leading-[28px] font-[700] text-[24px] mb-[24px]'>
                                How about the rules & regulations?
                            </p>
                        </div>
                        <div className='bg-[#F2F5F9] px-[40px] py-[32px]'>
                            <p className='text-black leading-[28px] font-[700] text-[24px] mb-[24px]'>
                                What if I damage my Scoot?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
