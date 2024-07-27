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
