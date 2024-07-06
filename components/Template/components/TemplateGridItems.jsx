import React from 'react'
import TemplateImage from './TemplateImage'

const TemplateGridItems = () => {
    const imageUrls = [
        {
            templateImageSrc: "https://cdn.dribbble.com/userupload/10686184/file/original-6675b968dbd359b3d2c1aad21f4a2fe0.png?resize=752x",
            githubRepoLink: "https://github.com/Sahilwagh03/my-bank",
            demoLink:"https://my-bank-topaz.vercel.app/"
        },
        {
            templateImageSrc: "https://cdn.dribbble.com/users/5460588/screenshots/20402248/media/10f2ecead9826ad5dd1b33a207b41642.png?resize=840x630&vertical=center",
            githubRepoLink: ""
        },
        {
            templateImageSrc: "https://cdn.dribbble.com/userupload/13060019/file/original-36a6938f989a626d71506aaac0363503.png?resize=752x",
            githubRepoLink: ""
        },
        {
            templateImageSrc: "https://cdn.dribbble.com/users/2410536/screenshots/17204829/media/b0f8ccbc73a1700a6054729ecceacd0f.png?resize=400x300&vertical=center",
            githubRepoLink: ""
        },
        {
            templateImageSrc: "https://cdn.dribbble.com/userupload/5011472/file/original-2426331e7de82bfe0dabff6b77baae2d.png?resize=752x",
            githubRepoLink: ""
        },
        {
            templateImageSrc: "https://cdn.dribbble.com/userupload/14492569/file/original-299a34527359301e4894c7d25d625674.png?resize=752x",
            githubRepoLink: ""
        },
        {
            templateImageSrc: "https://cdn.dribbble.com/userupload/5933896/file/original-85833266d4e9b0bc09fbc868ab6ab300.png",
            githubRepoLink: ""
        }
    ];
    
    return (
        <div className="container mx-auto p-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    imageUrls.map(({templateImageSrc,githubRepoLink,demoLink} , index) => (
                        <TemplateImage templateImageSrc={templateImageSrc} demoLink={demoLink} githubRepoLink={githubRepoLink} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TemplateGridItems