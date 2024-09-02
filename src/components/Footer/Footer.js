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
        "You're always welcome to leave your feedback!",
        "Let's seek discomfort and live to the fullest."
    ],
    loop:true,
    delaySpeed:2000
})
  return (
    <Section>
      
    <FooterWrapper>
      <NoteContainer>
        <ImgSection src="/images/quoteImg.png"/>
        
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
              <SocialIcons href='https://github.com/BacemJaza' target='_blank'>
                <AiFillGithub size="3rem"/>
              </SocialIcons>
              <SocialIcons href='https://www.linkedin.com/in/jaza-bacem/' target='_blank'>
                <AiFillLinkedin size="3rem"/>
              </SocialIcons>
              <SocialIcons href='https://www.instagram.com/bacemjaza/' target='_blank'>
                <AiFillInstagram size="3rem"/>
              </SocialIcons>
            </SocialContainer>
          </LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
      </SocialIconsContainer>
      
      
    </FooterWrapper>
    <NoteSection>{text}</NoteSection>
    </Section>
  );
};

export default dynamic (() => Promise.resolve(Footer), {ssr: false}) //Hydration problem
