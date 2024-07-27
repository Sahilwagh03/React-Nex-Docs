import React, { useState } from 'react';
import { Card, CardHeader, CardDescription, CardBody, CardFooter } from '../../../components/Card/CardComponets';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {FiEye , FiEyeOff } from 'react-icons/fi'

const Authentication_2 = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                <CardHeader className='!mb-2'>
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
                    <div className="flex flex-col gap-2 relative">
                        <span className="text-md font-medium text-left">Password</span>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className='!bg-transparent !dark:bg-transparent rounded-md h-9 w-full'
                                name="password"
                                value={formState.password}
                                onChange={handleInputChange}
                            />
                            <span
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff size={20}  /> : <FiEye size={20} />}
                            </span>
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <span className="text-md font-medium text-left">Confirm Password</span>
                        <div className="relative">
                            <Input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                className='!bg-transparent !dark:bg-transparent rounded-md h-9 w-full'
                                name="confirmPassword"
                                value={formState.confirmPassword}
                                onChange={handleInputChange}
                            />
                            <span
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FiEyeOff size={20}  /> : <FiEye size={20} />}
                            </span>
                        </div>
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
