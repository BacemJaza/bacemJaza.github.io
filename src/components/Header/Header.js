import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import dynamic from "next/dynamic";
import { Span, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/" style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
        
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <NavLink>Technologies</NavLink>
          </Link>
          </li>
          <li>
          <Link href="/">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='/'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default dynamic (() => Promise.resolve(Header), {ssr: false}) //Hydration problem

