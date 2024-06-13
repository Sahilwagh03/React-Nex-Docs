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
    link: 'https://github.com/Sahilwagh03/React-Nex-Docs',
  },
  docsRepositoryBase: 'https://react-nex-docs.vercel.app/',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://www.npmjs.com/package/react-nex" target="_blank">
          React Nex
        </a>
        .
      </span>
    )
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="https://i.ibb.co/KF7Vvs5/React-Nexus-Logo-removebg-preview.png"></link>
    </>
  ),
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://react-nex-docs.vercel.app/" target="_blank">
  //       🎉 React Nex Beta is here. Read more →
  //     </a>
  //   )
  // }
}

export default config
