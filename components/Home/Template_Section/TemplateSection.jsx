import React from 'react'
import TemplateCategory from './components/TemplateCategory'
import TemplateHeader from './TemplateHeader'

const TemplateSection = () => {
  return (
    <section className="relative flex flex-col gap-2 w-full mt-16 lg:mt-44">
      <TemplateHeader/>
      <TemplateCategory />
    </section>
  )
}

export default TemplateSection