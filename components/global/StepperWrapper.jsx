import React from 'react'
import { Step, StepDescription, Stepper, StepSeparator, StepTitle, useSteps } from '../Stepper/Stepper'
import {Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "../Card/CardComponets";
import Input from "../Input/Input";
import Button from "../Button/Button";
const StepperWrapper = () => {

    const steps = [
        { title: 'First', description: 'Contact Info' },
        { title: 'Second', description: 'Date & Time' },
        { title: 'Third', description: 'Select Rooms' },
    ]

    const { activeStep, goToNext, goToPrevious } = useSteps({
        index: 1,
        count: steps.length,
    });
    return (
        <>
            <div className="flex flex-col">
                <Stepper index={activeStep} >
                    {steps.map((step, index) => (
                        <>
                            <Step key={index}>
                                <div>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </div>
                            </Step>
                            <StepSeparator />
                        </>
                    ))}
                </Stepper>

                <div className='h-auto pt-8'>
                    {activeStep === 1 &&
                        <Card className={'min-w-[300px]'}>
                            <CardHeader>
                                <CardTitle className="text-left !text-3xl">Sign In</CardTitle>
                            </CardHeader>
                            <CardBody className={'gap-6'}>
                                <div className="flex flex-col gap-2">
                                    <span className="text-md font-medium text-left">Email</span>
                                    <Input type="email" placeholder="Email" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-md font-medium text-left">Password</span>
                                    <Input type="password" placeholder="Password" />
                                </div>
                                <span className="text-sm font-normal text-center">Don't have and account?<span className=" cursor-pointer text-md font-bold text-blue-500">Sign Up</span></span>
                            </CardBody>
                            <CardFooter className='mt-[20px]'>
                                <Button title="Sign In" className="bg-blue-500 w-full" />
                            </CardFooter>
                        </Card>
                    }
                    {activeStep === 2 && <h1 className='text-2xl font-semibold'>Email verification</h1>}
                    {activeStep === 3 && <h1 className='text-2xl font-semibold'>Onboarding</h1>}
                </div>
                {/* Example of navigation buttons */}
                <div className="flex justify-between mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={goToPrevious}>Previous</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={goToNext} >{activeStep == 3 ? 'Submit' : 'Next'}</button>
                </div>

            </div>
        </>
    )
}

export default StepperWrapper