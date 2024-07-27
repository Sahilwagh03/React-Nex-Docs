import React from 'react'
import { SideBar, SideBarBody, SideBarFooter, SideBarItem } from './_components/SideBar'
import { LuHome, LuBell, LuSettings, LuPieChart, LuMessageCircle, LuUsers, LuBarChart2 } from 'react-icons/lu';
import Avatar from '../../../components/Avatar/Avatar'
import SearchBar from '../../../components/SearchBar/SearchBar';
const Dashboard_1 = () => {
  return (
    <div className='flex flex-row rounded-lg relative'>
      <SideBar title='TechPro'>
        <SideBarBody>
          <SideBarItem icon={<LuHome className='w-6 h-6' />} title='Home' />
          <SideBarItem icon={<LuPieChart className='w-6 h-6' />} title='Overview' />
          <SideBarItem icon={<LuMessageCircle className='w-6 h-6' />} title='Messages' />
          <SideBarItem icon={<LuBarChart2 className='w-6 h-6' />} title='Analytics' />
          <SideBarItem icon={<LuBell className='w-6 h-6' />} title='Notifications' />
        </SideBarBody>
        <SideBarFooter>
          <SideBarItem className='hover:bg-transparent dark:hover:bg-transparent gap-3' icon={<Avatar className='w-9 h-full' />} title='Profile' />
        </SideBarFooter>
      </SideBar>
      <div className='flex-2 bg-white dark:dark:bg-[#27272a] h-screen w-full rounded-tr-lg roundex-br-lg overflow-auto no-scrollbar'>
        <div className='p-5'>
          <div className='flex flex-row justify-end'>
            <SearchBar
              onChange={(value) => console.log(value)}
              animated={true}
              IconColor="grey"
              className='rounded-xl w-[20rem] dark:bg-black/50' />
          </div>
          <div className='p-5 mt-4 h-full min-w-full h-screen rounded-xl bg-black/50 border-black/80'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_1