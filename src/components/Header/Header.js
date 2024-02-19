import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineUser, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import dynamic from "next/dynamic";
import { Span, Container, Divs, Div1, Div2, Div3, Mods,NavLink, SocialIcons } from './HeaderStyles';
import GlobalStyles from '@/styles/globals';
const Header = () =>  (
  <div>
    <Container>
     
      <Div1>
        <Link href="/" style={{display: "flex", color: "white"}}>
        
          <AiOutlineUser size="3rem"/> <Span>Portfolio</Span>
        
        </Link>
      </Div1>
      <Div2>
        <li>
            <NavLink>Projects</NavLink>
        </li>
        <li>
            <NavLink>Technologies</NavLink>
          </li>
          <li>
            <NavLink>Accomplishments</NavLink>
        </li>
        <li>
            <NavLink>MySpace</NavLink>
        </li>
        
      </Div2>
      
      
      <Mods id='square'>
        <SocialIcons href='/'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Mods>
    </Container>
  </div>
);

export default dynamic (() => Promise.resolve(Header), {ssr: false}) //Hydration problem

