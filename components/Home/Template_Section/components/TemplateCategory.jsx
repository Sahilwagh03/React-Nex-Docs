import React from 'react'

const TemplateCategory = () => {
    return (
        <div className='py-6 lg:py-10 flex flex-col lg:flex-row  gap-10 my-6 lg:my-10 lg:p-6 rounded-3xl group'>
            <div className="pr-4">
                <h2 className="font-bold text-2xl">AI SaaS Template</h2>
                <div className="text-base  w-full lg:max-w-xs mt-4 leading-6">
                    <p className="text-sm lg:max-w-xs mt-4 leading-6">Every AI SaaS template is a multi-page template focused on AI applications offering SaaS solutions.</p>
                </div>
                <div className="h-[2px] rounded-full w-10 my-4 "></div>
                <p className=" flex items-center space-x-1 w-fit text-sm font-normal rounded-md cursor-pointer">
                    <span>View Template</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-neutral-700 dark:text-neutral-300 group-hover:translate-x-2 transition duration-200">
                        <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                </p>
            </div>
            <div className="flex order-first lg:order-last flex-col mt-4 lg:mt-0 flex-1">
                <div className="w-full md:hidden">
                    <img alt="Product Image" className="object-cover object-center rounded-xl w-full h-full" src="https://cdn.dribbble.com/userupload/10138231/file/original-e823d0baa477ae0e0ad92465bb7116f8.png" />
                </div>

                <div className="flex-row space-x-2 w-full mt-4 md:mt-0 hidden md:flex">
                    <div className="relative h-48 md:h-64 lg:h-72">
                        <img alt="Product Image" className=" object-cover object-center rounded-md w-full h-full border border-neutral-200 dark:border-neutral-800 shadow-sm" src="https://cdn.dribbble.com/userupload/10138231/file/original-e823d0baa477ae0e0ad92465bb7116f8.png" />
                    </div>

                    <div className="relative h-48 md:h-64 lg:h-72">
                        <img alt="Product Image" className="object-cover object-center rounded-md w-full h-full border border-neutral-200 dark:border-neutral-800 shadow-sm" src="https://cdn.dribbble.com/userupload/11559272/file/original-7d7b9a19a159e3dce5803c7476d52a49.png" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TemplateCategory