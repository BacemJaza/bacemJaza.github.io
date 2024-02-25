import React from 'react';
import dynamic from "next/dynamic";
import Image from 'next/image';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import BackgroundAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, RightSection, SectionCustom } from './HeroStyles';

const Hero = (props) => (
  <Section row>
    <LeftSection>
      <SectionTitle main center>
      Welcome to <br/>
      my digital home! 
      </SectionTitle>
      <SectionText>
      This is where my passions and talents converge
      and I'm excited to give you a glimpse into my creative world.
      </SectionText>
      <Button onClick ={()=>window.location ="#aboutMe"}>Learn More</Button>
      </LeftSection>
      <RightSection >
      <BackgroundAnimation/>
      </RightSection>
      
  </Section>
);

export default dynamic (() => Promise.resolve(Hero), {ssr: false}) //Hydration problem