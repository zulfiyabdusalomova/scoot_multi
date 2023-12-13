import React from 'react'
import { Text } from '../../../common/text/Text'
import { Button } from '../../../common/button/Button'

export const Map = () => {
    return (
        <div className='py-[120px]'>
            <div className='container'>
                <img src="/public/mock-images/locations/map.png" alt="" />
                <div className='flex mt-[120px] j justify-around items-center'>
                    <div>
                        <h2 className='text-black text-[48px] font-[700] leading-[48px]'>
                            Your city <br /> not listed?
                        </h2>
                    </div>
                    <div>
                        <Text>
                            If you’d like to see Scoot in your hometown,
                            be sure to let us <br /> know. We track requests
                            and plan launches based on <br /> demand. Feel free
                            to message us by clicking the link or <br /> messaging
                            us on social.
                        </Text>
                    </div>
                    <div>
                        <Button styles="px-[44.5px]">Message Us</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
