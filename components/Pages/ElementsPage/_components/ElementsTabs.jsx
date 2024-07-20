import React from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../../../Tabs/Tabs';
import Authentication_1 from '../../../../Elements/Authentication/_components/Authentication_1';
import AuthenticationSection from '../../../../Elements/Authentication/AuthenticationSection';

const ElementsTabs = () => {
    return (
        <Tabs defaultValue="authentication">
            <TabsList className="flex flex-row flex-wrap gap-2 p-1 !justify-start rounded-md bg-white text-black dark:bg-transparent dark:text-white">
                <TabsTrigger value="authentication" className='text-sm !rounded-full text-[#a1a1aa] dark:text-slate-400' activeStyle='text-black dark:text-white dark:bg-[#383838]'>Authentication</TabsTrigger>
                <TabsTrigger value="dashboards" className='text-sm !rounded-full text-[#a1a1aa] dark:text-slate-400' activeStyle='text-black dark:text-white dark:bg-[#383838]'>Dashboards</TabsTrigger>
                <TabsTrigger value="hero-sections" className='text-sm !rounded-full text-[#a1a1aa] dark:text-slate-400' activeStyle='text-black dark:text-white dark:bg-[#383838]' >Hero Sections</TabsTrigger>
                <TabsTrigger value="faqs" className='text-sm !rounded-full text-[#a1a1aa] dark:text-slate-400' activeStyle='text-black dark:text-white dark:bg-[#383838]'>FAQs</TabsTrigger>
                <TabsTrigger value="testimonials" className='text-sm !rounded-full text-[#a1a1aa] dark:text-slate-400' activeStyle='text-black dark:text-white dark:bg-[#383838]'>Testimonials</TabsTrigger>
                <TabsTrigger value="call-to-actions" className='text-sm !rounded-full text-[#a1a1aa] dark:text-slate-400' activeStyle='text-black dark:text-white dark:bg-[#383838]'>Call to Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="authentication" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-md font-bold pb-4 pl-2">Authentication-01</h2>
                    <AuthenticationSection/>
                </div>
            </TabsContent>
            <TabsContent value="dashboards" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Dashboards</h2>
                    <p> Comming Soon...</p>
                </div>
            </TabsContent>
            <TabsContent value="hero-sections" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Hero Sections</h2>
                    <p> Comming Soon..</p>
                </div>
            </TabsContent>
            <TabsContent value="faqs" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">FAQs</h2>
                    <p> Comming Soon...</p>
                </div>
            </TabsContent>
            <TabsContent value="testimonials" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Testimonials</h2>
                    <p> Comming Soon...</p>
                </div>
            </TabsContent>
            <TabsContent value="call-to-actions" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Call to Actions</h2>
                    <p> Comming Soon...</p>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default ElementsTabs;