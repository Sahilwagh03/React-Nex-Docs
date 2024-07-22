import React, { useState } from 'react'
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets'
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Authentication_4 = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
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
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleLogin = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            // Handle login logic here
            console.log("Logging in with:", formState);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Card className="max-w-sm w-full">
                <CardHeader className='!mb-2'>
                    <h1 className="text-2xl font-bold text-black dark:text-white">Login</h1>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                        Enter your email and password to Login
                    </CardDescription>
                </CardHeader>
                <CardBody>
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
                        <div className="flex justify-between items-center">
                            <span className="text-md font-medium text-left">Password</span>
                            <Link href="#" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">Forgot password?</Link>
                        </div>
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
                        <Button className="w-full bg-black text-white dark:bg-white dark:text-black" onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Don't have an account? </span>
                        <Link href="/" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">Sign up</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Authentication_4;
