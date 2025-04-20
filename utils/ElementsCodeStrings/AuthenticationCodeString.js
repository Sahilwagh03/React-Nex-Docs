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
                            placeholder="j@example.com" 
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

export const Authentication_02 = `
import React, { useState } from 'react';
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Authentication_2 = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '', confirmPassword: '' });
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
        if (!formState.username) newErrors.username = 'Username is required';
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.password) newErrors.password = 'Password is required';
        if (formState.password !== formState.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
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
            <Card className="max-w-sm w-full">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-black dark:text-white">Create an account</h1>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-2">
                        <span className="text-md font-medium text-left">Username</span>
                        <Input
                            type="text"
                            placeholder="Username"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-9'
                            name="username"
                            value={formState.username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
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
                    <div className="flex flex-col gap-2">
                        <span className="text-md font-medium text-left">Confirm Password</span>
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            className='!bg-transparent !dark:bg-transparent rounded-md h-9'
                            name="confirmPassword"
                            value={formState.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                    </div>
                </CardBody>
                <CardFooter className="pt-3">
                    <Button className="w-full bg-black text-white dark:bg-white dark:text-black" onClick={handleCreateAccount}>
                        Create account
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Authentication_2;

`

export const Authentication_03 = `
import React, { useState } from 'react'
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets'
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
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
`

export const Authentication_04 = `
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
`

export const Authentication_05 = `
import React, { useState } from 'react'
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets'
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Authentication_5 = () => {
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
        <div className="flex items-center justify-center h-screen">
            <Card className="max-w-sm w-full">
                <div className="flex flex-row pb-4 items-center gap-2">
                    <img src='https://seeklogo.com/images/M/microsoft-365-copilot-logo-44BA459F18-seeklogo.com.png' className="h-8 w-auto" />
                    <h2 className="text-xl font-bold text-black dark:text-white">TechCorp</h2>
                </div>
                <CardHeader className='!mb-2'>
                    <h1 className="text-xl font-bold text-black dark:text-white">Sign in</h1>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                        Enter your email below to login
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
                <CardFooter className="pt-3">
                    <Button className="w-full bg-black text-white dark:bg-white dark:text-black" onClick={handleCreateAccount}>
                        Sign in
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Authentication_5
`