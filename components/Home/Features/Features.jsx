import React from 'react'
import { featuresData } from './utils/featuresData'
import FeaturesCard from './components/FeaturesCard'
const Features = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pt-40">
      {
        featuresData.map(({ title, icon, description }, index) => (
          <FeaturesCard  title={title} icon={icon} description={description} key={index}/>
        ))
      }
    </div>
  )
}

export default Features