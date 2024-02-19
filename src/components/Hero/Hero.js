import React from 'react';
import dynamic from "next/dynamic";
import Image from 'next/image';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import BackgroundAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br/>
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is a demo to the portfolio website tutorial
      </SectionText>
      {/* <Button onClick ={()=>window.location ="/"}>Learn More</Button> */}
    </LeftSection>
    <RightSection>
      <BackgroundAnimation/>
    </RightSection>

  </Section>
);

export default dynamic (() => Promise.resolve(Hero), {ssr: false}) //Hydration problem