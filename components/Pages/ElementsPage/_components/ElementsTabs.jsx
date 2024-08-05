import React from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../../../Tabs/Tabs';
import { AuthenticationElementsData, DashboardElementsData, FaqElementsData , CarouselElementData } from '../../../../constant/Elements';
import ElementsWrapper from '../../../../Elements/ElementsWrapper';

const ElementsTabs = () => {
    return (
        <Tabs defaultValue="authentication">
            <TabsList className="flex flex-row flex-wrap gap-2 mb-4 p-1 !justify-start rounded-md bg-white text-black dark:bg-transparent dark:text-white">
                <TabsTrigger value="authentication" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Authentication</TabsTrigger>
                <TabsTrigger value="call-to-actions" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Call to Actions</TabsTrigger>
                <TabsTrigger value="carousel" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Carousel</TabsTrigger>
                <TabsTrigger value="dashboards" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Dashboards</TabsTrigger>
                <TabsTrigger value="hero-sections" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg' >Hero Sections</TabsTrigger>
                <TabsTrigger value="faqs" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>FAQs</TabsTrigger>
                <TabsTrigger value="testimonials" className='text-sm !rounded-full text-[#a1a1aa]' activeStyle='text-black gradient-bg  dark:gradient-bg'>Testimonials</TabsTrigger>
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
            <TabsContent value="call-to-actions" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Call to Actions</h2>
                    <p> Comming Soon...</p>
                </div>
            </TabsContent>
            <TabsContent value="carousel" className='border-0 dark:border-0'>
                {
                    CarouselElementData.map(({ code, component, name }, index) => (
                        <ElementsWrapper componentContainerStyle='!min-h-[300px] flex items-center justify-center' code={code} component={component} name={name} key={index} showMode={false} />
                    ))
                }
            </TabsContent>
            <TabsContent value="dashboards" className='border-0 dark:border-0'>
                <div className='flex flex-col gap-5 md:gap-10'>
                    {
                        DashboardElementsData.map(({ code, component, name }, index) => (
                            <ElementsWrapper componentContainerStyle='md:!p-0 md:!border-none' code={code} component={component} name={name} key={index} showMode={false} />
                        ))
                    }
                </div>
            </TabsContent>
            <TabsContent value="faqs" className='border-0 dark:border-0'>
                <div className='flex flex-col gap-5 md:gap-10'>
                    {
                        FaqElementsData.map(({ code, component, name }, index) => (
                            <ElementsWrapper code={code} component={component} name={name} key={index} showMode={false} />
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
            <TabsContent value="testimonials" className='border-0 dark:border-0'>
                <div>
                    <h2 className="text-xl font-bold pb-4">Testimonials</h2>
                    <p> Comming Soon...</p>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default ElementsTabs;