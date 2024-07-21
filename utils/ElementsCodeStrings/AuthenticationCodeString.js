export const Authentication_01 =`
import React, { useState } from 'react'
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets'
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Authentication_1 = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCreateAccount = () => {
        // Handle account creation logic here
        console.log("Creating account with:", formState.email, formState.password);
    };

    return (
        <div className="flex items-center justify-center">
            <Card className="max-w-sm w-full">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-black dark:text-white">Create an account</h1>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                        Enter your email below to create your account
                    </CardDescription>
                </CardHeader>
                <CardBody>
                    <div className="flex gap-2">
                        <Button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-[#383838] dark:hover:bg-[#1C1C1B]">
                            <FaGithub size={20} className='fill-black dark:fill-white' /> Github
                        </Button>
                        <Button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-[#383838] dark:hover:bg-[#1C1C1B]">
                            <FaGoogle size={20} className='fill-black dark:fill-white' /> Google
                        </Button>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="flex-grow border-t border-gray-300 dark:border-[#383838]"></div>
                        <span className="px-2 text-xs text-gray-600 dark:text-gray-400">OR CONTINUE WITH</span>
                        <div className="flex-grow border-t border-gray-300 dark:border-[#383838]"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-md font-medium text-left">Email</span>
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            className='!bg-transparent !dark:bg-transparent rounded-md h-9' 
                            name="email"
                            value={formState.email} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-md font-medium text-left">Password</span>
                        <Input 
                            type="password" 
                            placeholder="Password" 
                            className='!bg-transparent !dark:bg-transparent rounded-md h-9' 
                            name="password"
                            value={formState.password} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </CardBody>
                <CardFooter className="pt-3">
                    <Button className="w-full bg-black text-white dark:bg-white dark:text-black" onClick={handleCreateAccount}>
                        Create account
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Authentication_1
` 