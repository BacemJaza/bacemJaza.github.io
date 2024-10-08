import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineUser, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaHackerrank } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { DiCssdeck } from 'react-icons/di';
import dynamic from "next/dynamic";
import { Span, Container, Divs, Div1, Div2, Div3, Mods,NavLink, SocialIcons, ContactDropDown } from './HeaderStyles';
import GlobalStyles from '@/styles/globals';
const Header = () => {
return (
  <div>
    <Container>
     
      <Div1>
        <Link href="/" style={{display: "flex", color: "white"}}>
        
          <AiOutlineUser size="3rem"/> <Span>Portfolio</Span>
        
        </Link>
      </Div1>
      <Div2>
        <li>
            <NavLink href='#projects'>Projects</NavLink>
        </li>
        <li>
            <NavLink href='#technologies'>Technologies</NavLink>
          </li>
          <li>
            <NavLink href='#accomplishments'>Accomplishments</NavLink>
        </li>
        <li>
            <NavLink style={{filter: "blur(1px)", cursor:"auto"}}>MySpace</NavLink>
        </li>
        
      </Div2>
      
    </Container>
  </div>
);
} 

export default dynamic (() => Promise.resolve(Header), {ssr: false}) //Hydration problem

