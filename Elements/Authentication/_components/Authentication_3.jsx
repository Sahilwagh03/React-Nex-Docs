import React, { useState } from 'react'
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets'
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Authentication_3 = () => {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // Clear the error for the field being updated
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formState.firstName) newErrors.firstName = 'First name is required';
        if (!formState.lastName) newErrors.lastName = 'Last name is required';
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleCreateAccount = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            // Handle account creation logic here
            console.log("Creating account with:", formState);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Card className="max-w-sm w-full ">
                <CardHeader className='!mb-2'>
                    <h1 className="text-2xl font-bold text-black dark:text-white">Sign Up</h1>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardBody className='!gap-2'>
                    <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-col w-[48%] gap-2">
                            <span className="text-md font-medium text-left">First name</span>
                            <Input
                                type="text"
                                placeholder="John"
                                className='!bg-transparent !dark:bg-transparent rounded-md h-9'
                                name="firstName"
                                value={formState.firstName}
                                onChange={handleInputChange}
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                        </div>
                        <div className="flex flex-col w-[48%] gap-2">
                            <span className="text-md font-medium text-left">Last name</span>
                            <Input
                                type="text"
                                placeholder="Doe"
                                className='!bg-transparent !dark:bg-transparent rounded-md h-9'
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleInputChange}
                            />
                            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-md font-medium text-left">Email</span>
                        <Input
                            type="email"
                            placeholder="j@example.com"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-9'
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
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
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                </CardBody>
                <CardFooter className="flex flex-col gap-2">
                    <div className="flex flex-col gap-4">
                        <Button className="w-full bg-black text-white dark:bg-white dark:text-black" onClick={handleCreateAccount}>
                            Create account
                        </Button>
                        <Button className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-[#383838] dark:hover:bg-[#1C1C1B]">
                            Sign up with GitHub
                        </Button>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Already have an account? </span>
                        <Link href="/" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">Sign in</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Authentication_3;
