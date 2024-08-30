import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation'
import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import { Mods, SocialIcons } from '@/components/Header/HeaderStyles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaHackerrank } from 'react-icons/fa6'
import { TbBrandFiverr } from 'react-icons/tb'


export const Layout = ({children}) => {
  return (
    
    <Container>
      <Mods id='square'>
        <SocialIcons href='https://github.com/BacemJaza'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jaza-bacem/'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.hackerrank.com/profile/bacemjaza7'>
          <FaHackerrank size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.fiverr.com/jazabacem'>
          <TbBrandFiverr size="3rem"/>
        </SocialIcons>
      </Mods>
      <Header/>
      <main>{children}</main> 
      <Footer/>
    </Container>
    
    
  )
}
