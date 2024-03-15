import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import ReactNexLogo from './assets/ReactNexusLogo.png'
const config: DocsThemeConfig = {
  logo: 
  <span style={{display:'flex',flexDirection:'row',alignItems:'center' ,fontWeight:700,fontSize:'20px',gap:4}}>
    <Image src={ReactNexLogo} alt='React-Nex' width={35} height={35}/>
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
