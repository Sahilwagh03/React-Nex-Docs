import React from 'react'
import TemplateCategory from './components/TemplateCategory'

const TemplateSection = () => {
  return (
    <section className="relative flex flex-col gap-2 w-full mt-16 lg:mt-44">
      <div className="flex flex-col gap-8">
        <div aria-hidden="true" className='flex flex-col items-center text-center'>
          <div className="flex flex-col gap-1 items-center justify-center w-full">
            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
              Ready-Made
              <span className="tracking-tight gradient-text inline font-semibold text-4xl lg:text-6xl bg-gradient-to-b"> Templates</span>
              <span className='text-4xl lg:text-[2.4rem] gradient-text'>⚡</span>
            </h1>

          </div>
          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-light block max-w-full">Build stunning user interfaces in record time with our curated template library.</p>
        </div>
      </div>
      <TemplateCategory />
    </section>
  )
}

export default TemplateSection