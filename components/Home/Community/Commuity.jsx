import React from 'react';
import { FiTwitter, FiGithub } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const Commuity = () => {

    const communityData =[
        {
            "platform": "Twitter",
            "icon": "FiTwitter",
            "color": "#00ACEE",
            "description": "For announcements, tips and general information."
        },
        {
            "platform": "Discord",
            "icon": "FaDiscord",
            "color": "#7289DA",
            "description": "To get involved in the community, ask questions and share tips."
        },
        {
            "platform": "Github",
            "icon": "FiGithub",
            "color": "#333",
            "description": "To report bugs, request features and contribute to the project."
        }
    ]
    return (
        <section className="relative z-10 gap-2 w-full flex flex-col items-center mt-16 lg:mt-44">
            <div className="max-w-4xl flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 justify-center w-full items-center">
                        <div className="inline-flex items-center">
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Community</h1>
                            &nbsp;&nbsp;
                        </div>
                    </div>
                    <p className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full md:w-full text-center flex justify-center items-center">Get involved in our community. Everyone is welcome!</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-10">
                        {communityData.map((community, index) => (
                            <button key={index} className="flex flex-col rounded-md relative overflow-hidden h-auto text-foreground box-border outline-none focus:outline-none shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none scale-97 hover:scale-100 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-1.8" type="button">
                                <div className="flex p-3 w-full justify-start items-center">
                                    <div className="flex justify-center p-2 rounded-full items-center text-white bg-transparent">
                                        {renderIcon(community.icon, community.color)}
                                    </div>
                                    <p className="text-base font-semibold ml-2">{community.platform}</p>
                                </div>
                                <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0">
                                    <p className="font-normal text-base text-default-500">{community.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Function to render React icons dynamically
const renderIcon = (iconName, color) => {
    switch (iconName) {
        case 'FiTwitter':
            return <FiTwitter size={32} color={color} />;
        case 'FaDiscord':
            return <FaDiscord size={32} color={color} />;
        case 'FiGithub':
            return <FiGithub size={32} color={color} />;
        default:
            return null;
    }
};

export default Commuity;
