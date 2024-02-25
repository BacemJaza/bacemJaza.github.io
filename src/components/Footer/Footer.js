import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import dynamic from "next/dynamic";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, ImgSection, LinkColumn, LinkItem, LinkList, LinkTitle, NoteContainer, NoteSection, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { useTypewriter } from 'react-simple-typewriter';
import { Section } from '@/styles/GlobalComponents';

const Footer = () => {
  const [text,count] = useTypewriter({
    words:[
        "Hi, the name's Bacem",
        "You're always welcome to leave your feedback!"
    ],
    loop:true,
    delaySpeed:2000
})
  return (
    <Section>
    <FooterWrapper>
      <NoteContainer>
        <ImgSection src="/images/quoteImg.png"/>
        <NoteSection>{text}</NoteSection>
      </NoteContainer>
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
          <LinkTitle>Socials</LinkTitle>
          <LinkItem>
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
          </LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
      </SocialIconsContainer>
      
      
    </FooterWrapper>
    </Section>
  );
};

export default dynamic (() => Promise.resolve(Footer), {ssr: false}) //Hydration problem
