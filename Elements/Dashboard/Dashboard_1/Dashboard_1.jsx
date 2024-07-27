import React from 'react'
import { SideBar, SideBarItem } from './_components/SideBar'
import { LuHome, LuSettings, LuBell, LuUser } from 'react-icons/lu';

const Dashboard_1 = () => {
  return (
    <div className='flex flex-row rounded-lg'>
      <SideBar>
        <SideBarItem icon={<LuHome className='w-6 h-6' />} title='Home' />
        <SideBarItem icon={<LuSettings className='w-6 h-6' />} title='Settings' />
        <SideBarItem icon={<LuBell className='w-6 h-6' />} title='Notifications' />
        <SideBarItem icon={<LuUser className='w-6 h-6' />} title='Profile' />
      </SideBar>
      <div className='flex-2 bg-white dark:dark:bg-[#27272a] h-screen w-full rounded-tr-lg roundex-br-lg'>
        
      </div>
    </div>
  )
}

export default Dashboard_1