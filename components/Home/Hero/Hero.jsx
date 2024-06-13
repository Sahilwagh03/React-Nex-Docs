import React from 'react'
import Button from '../../Button/Button'
import Alert from '../../Alert/Alert'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '../../Card/CardComponets'
import SwitchWrapper from '../../global/SwitchWrapper'
import Avatar from '../../Avatar/Avatar'
import AvatarGroup from '../../AvatarGroup/AvatarGroup'
import { Tooltip, TooltipContent, TooltipTrigger } from "../../Tooltip/Tooltip";
import CheckBox from '../../CheckBox/CheckBox'
import Input from '../../Input/Input'
import InputOtpContainer from '../../Input OTP/InputOtpContainer';
import InputOtpBox from '../../Input OTP/InputOtpBox';
import ProgressBar from '../../ProgressBar/ProgressBar'

const Hero = () => {
    return (
        <section className="mx-auto flex md:h-[80vh] max-w-[980px] flex-col justify-center items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <a className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium" href="/Introduction">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-blocks h-4 w-4">
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                </svg>
                <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
                <span>Introducing React Nex</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
            </a>
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">Build beautiful UI's faster</h1>
            <span className="max-w-[502px] text-center text-lg font-light">Cut the bloat, boost your development. React-nex offers a lightweight approach to UI components. Accessible. Open Source.</span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
                <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9" href="/Introduction">
                    <Button title='Get Started' />
                </a>
                <a target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" href="https://github.com/Sahilwagh03/React-Nex-Components/tree/main/src/components">
                    <svg viewBox="0 0 438.549 438.549" className="mr-2 h-4 w-4">
                        <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                    </svg>
                    GitHub
                </a>
            </div>
            <div className='hidden md:absolute md:flex w-full h-full md:mt-20'>
                <div className='absolute right-12 top-10 animate-upDown'>
                    <Alert
                        type="success"
                        title="Success!"
                        message="Your operation was successful."
                        className='w-fit'
                    />
                </div>
                <div className='absolute right-[8rem] top-[21rem] animate-upDown'>
                    <Card className='max-w-[300px] '>
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
                <div className='absolute right-10 top-40 animate-upDown'>
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
                <div className='absolute left-6 top-36 animate-upDown'>
                    <CheckBox
                        label='Subscribe to newsletter'
                        description=" Receive updates and offers."
                    />
                </div>
                <div className='absolute left-44 top-10 animate-upDown min-w-[250px]'>
                    <Input type="text" placeholder="Input" value='John' />
                </div>
                <div className='absolute left-32 top-64 animate-upDown min-w-[250px]'>
                    <AvatarGroup imageContainerStyle={'bg-red-400'}>
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
        </section >
    )
}

export default Hero