import React from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../../../Tabs/Tabs';

import { AuthenticationElementsData, DashboardElementsData, FaqElementsData } from '../../../../constant/Elements';
import ElementsWrapper from '../../../../Elements/ElementsWrapper';
import Dashboard_1 from '../../../../Elements/Dashboard/Dashboard_1/Dashboard_1';
const ElementsTabs = () => {
    return (
        <Tabs defaultValue="authentication">
            <TabsList className="flex flex-row flex-wrap gap-2 mb-4 p-1 !justify-start rounded-md bg-white text-black dark:bg-transparent dark:text-white">
                <TabsTrigger value="authentication" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Authentication</TabsTrigger>
                <TabsTrigger value="dashboards" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Dashboards</TabsTrigger>
                <TabsTrigger value="hero-sections" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg' >Hero Sections</TabsTrigger>
                <TabsTrigger value="faqs" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>FAQs</TabsTrigger>
                <TabsTrigger value="testimonials" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Testimonials</TabsTrigger>
                <TabsTrigger value="call-to-actions" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Call to Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="authentication" className='border-0 dark:border-0'>
                <div className='flex flex-col gap-5 md:gap-10'>
                    {
                        AuthenticationElementsData.map(({ code, component, name }, index) => (
                            <ElementsWrapper code={code} component={component} name={name} key={index} />
                        ))
                    }
                </div>
            </TabsContent>
            <TabsContent value="dashboards" className='border-0 dark:border-0'>
                <div className='flex flex-col gap-5 md:gap-10'>
                    {
                        DashboardElementsData.map(({ code, component, name }, index) => (
                            <ElementsWrapper code={code} component={component} name={name} key={index} showMode={false}/>
                        ))
                    }
                </div>
            </TabsContent>
            <TabsContent value="hero-sections" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Hero Sections</h2>
                    <p> Comming Soon..</p>
                </div>
            </TabsContent>
            <TabsContent value="faqs" className='border-0 dark:border-0'>
                <div className='flex flex-col gap-5 md:gap-10'>
                    {
                        FaqElementsData.map(({ code, component, name }, index) => (
                            <ElementsWrapper code={code} component={component} name={name} key={index} showMode={false}/>
                        ))
                    }
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