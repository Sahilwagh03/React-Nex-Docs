import React from 'react'
import TemplateHeader from '../Home/Template_Section/TemplateHeader'
import TemplateGridItems from './components/TemplateGridItems'
const TemplatePage = () => {
  return (
    <div className='py-10'>
        <TemplateHeader/>
        <TemplateGridItems />
    </div>
  )
}

export default TemplatePage