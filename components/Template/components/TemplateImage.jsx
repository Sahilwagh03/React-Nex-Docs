import React from 'react'
import TemplateDetailsSheet from './TemplateDetailsSheet'

const TemplateImage = ({ src }) => {
    return (
        <TemplateDetailsSheet src={src}>
            <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden rounded-2xl">
                <img alt="Template Image" className="object-cover object-center w-full h-full border border-neutral-200 dark:border-neutral-800 shadow-sm transform transition-transform duration-600 hover:scale-110 rounded-2xl" src={src} />
            </div>
        </TemplateDetailsSheet>
    )
}

export default TemplateImage