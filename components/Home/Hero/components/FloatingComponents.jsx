import React, { useEffect, useState } from 'react'
import Alert from '../../../Alert/Alert'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '../../../Card/CardComponets'
import SwitchWrapper from '../../../global/SwitchWrapper'
import Avatar from '../../../Avatar/Avatar'
import AvatarGroup from '../../../AvatarGroup/AvatarGroup'
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../Tooltip/Tooltip";
import CheckBox from '../../../CheckBox/CheckBox'
import Input from '../../../Input/Input'
import InputOtpContainer from '../../../Input OTP/InputOtpContainer';
import InputOtpBox from '../../../Input OTP/InputOtpBox';
import ProgressBar from '../../../ProgressBar/ProgressBar'
import Button from '../../../Button/Button'

const FloatingComponents = () => {
    const [input,setInput]=useState('John Doe')

    useEffect(()=>{
        console.log(input)
    },[input])
    return (
        <div className='hidden md:absolute lg:flex w-full h-full md:mt-20'>
            <div className='absolute right-12 top-10 animate-upDown animation-delay-200'>
                <Alert
                    type="success"
                    title="Success!"
                    message="Your operation was successful."
                    className='w-fit'
                />
            </div>
            <div className='absolute right-[8rem] top-[21rem] animate-upDown animation-delay-600'>
                <Card className='max-w-[300px] bg-white dark:bg-[#1C1C1B]'>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Avatar size={'sm'} src='https://bit.ly/code-beast' />
                                <div className="ml-2">
                                    <CardTitle className='!mb-0'>Zoey Lang</CardTitle>
                                    <p>@zoeylang</p>
                                </div>
                            </div>
                            <Button title="Follow" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>Full-stack developer, @reactjs enthusiast he/him 🎉</p>
                    </CardBody>
                    <CardFooter>
                        <div className="flex space-x-4 mt-2">
                            <div className='flex flex-row gap-1'>
                                <p className="font-bold">4</p>
                                <p>Following</p>
                            </div>
                            <div className='flex flex-row gap-1'>
                                <p className="font-bold">97.1K</p>
                                <p>Followers</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className='absolute right-10 top-40 animate-upDown animation-delay-400'>
                <SwitchWrapper />
            </div>
            <div className='absolute left-[5rem] top-[24rem] animate-upDown'>
                <Tooltip>
                    <TooltipTrigger>
                        <Button title='Tool tip'></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p class="nx-mt-0 nx-leading-0 first:nx-mt-0">Developer love React-Nex</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className='absolute left-6 top-36 animate-upDown animation-delay-200'>
                <CheckBox
                    label='Subscribe to newsletter'
                    description=" Receive updates and offers."
                />
            </div>
            <div className='absolute left-44 top-10 animate-upDown min-w-[250px] animation-delay-800'>
                <Input type="text" placeholder="Input" className='bg-white dark:bg-black/50 rounded-lg h-9 w-full' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className='absolute left-32 top-64 animate-upDown min-w-[250px] animation-delay-600'>
                <AvatarGroup imageContainerStyle={'gradient-bg'}>
                    <Avatar size={'sm'} src='https://bit.ly/ryan-florence' />
                    <Avatar size={'sm'} src='https://bit.ly/sage-adebayo' />
                    <Avatar size={'sm'} src='https://bit.ly/kent-c-dodds' />
                    <Avatar size={'sm'} src='https://bit.ly/prosper-baba' />
                    <Avatar size={'sm'} src='https://bit.ly/code-beast' />
                </AvatarGroup>
            </div>
            <div className='absolute left-96 top-[28rem] animate-upDown min-w-[250px]'>
                <InputOtpContainer>
                    <InputOtpBox
                        length={4}
                    />
                </InputOtpContainer>
            </div>
            <div className='absolute right-20 top-[15rem] animate-upDown min-w-[250px]'>
                <ProgressBar value={40} />
            </div>
        </div>
    )
}

export default FloatingComponents