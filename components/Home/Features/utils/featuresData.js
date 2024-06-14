import { FaCogs, FaCodeBranch, FaMobileAlt } from 'react-icons/fa';
import { PiWaveSineDuotone } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
export const featuresData = [
    {
        title: "Flexible Components",
        description: "Customizable and adaptable components to fit your project needs perfectly.",
        icon: <PiWaveSineDuotone size={28} className=' text-[#6e7af7]' />
    },
    {
        title: "Fast Integration",
        description: "Seamlessly integrate components into your React projects without the hassle of npm installations.",
        icon:
            <svg aria-hidden="true" fill="none" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" class="text-[#6e7af7]">
                <path d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
            </svg>
    },
    {
        title: "Open Source",
        description: "All components are open-source, giving you the freedom to modify and improve as needed.",
        icon: <BiGitBranch size={22} className='text-[#6e7af7]' />
    },
    {
        title: "Responsive Design",
        description: "Components are built to look great on all devices, providing a consistent user experience.",
        icon:
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"  height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="text-[#6e7af7]">
                <path d="M136,120v88H48V120Z" opacity="0.2"></path>
                <path d="M136,112H48a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V120A8,8,0,0,0,136,112Zm-8,88H56V128h72Zm88-16v16a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V184a8,8,0,0,1,16,0Zm0-72v32a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm0-56V72a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h16A16,16,0,0,1,216,56Zm-64-8a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,48ZM40,80V56A16,16,0,0,1,56,40H72a8,8,0,0,1,0,16H56V80a8,8,0,0,1-16,0Z"></path>
            </svg>
    }
]