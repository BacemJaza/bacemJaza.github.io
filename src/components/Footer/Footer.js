import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import dynamic from "next/dynamic";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:53-069-199'>53-069-199</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='tel:53-069-199'>bacemjaza7@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:53-069-199'>53-069-199</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Demo for slogan</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='/'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default dynamic (() => Promise.resolve(Footer), {ssr: false}) //Hydration problem
