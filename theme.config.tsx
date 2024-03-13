import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import ReactNexLogo from './assets/ReactNexusLogo.jpg'
const config: DocsThemeConfig = {
  logo: 
  <span style={{display:'flex',flexDirection:'row',alignItems:'center' ,fontWeight:700,fontSize:'20px'}}>
    <Image src={ReactNexLogo} alt='React-Nex' width={40} height={40}/>
    React <span style={{color:'#61DAFB'}}>Nex</span>
  </span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
