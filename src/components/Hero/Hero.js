import React from 'react';
import dynamic from "next/dynamic";
import Image from 'next/image';
import { Section, SectionText, SectionTitle, SectionDivider, SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import BackgroundAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, RightSection, SectionCustom } from './HeroStyles';
import { IoIosDocument } from 'react-icons/io';
import { CiCircleAlert } from "react-icons/ci";

const Hero = (props) => (
  <Section row>
    <LeftSection>
      <SectionTitle main center>
      Welcome to <br/>
      my digital home! 
      </SectionTitle>
      <SectionText>
      This is where my passions and talents converge and I'm excited to give you a glimpse into my creative world.
      <SectionSubText><CiCircleAlert size={"100px"} color='#667AD1'/><p>🚀 Super excited to share that I'm currently doing my internship at <a style={{fontStyle:"bold",color:"white", textDecoration:"underline"}} href='https://www.maon.eu/'>Maon GmbH</a> in Germany! 🌏💼 Can’t wait to come back with tons of experience and unforgettable memories! ✨</p>
      </SectionSubText>
      </SectionText>
      <Button>
      <IoIosDocument />
        <a
          href="/files/Bacem-Jaza-Resume.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          style={{color:"white"}}>
            View Resume
        </a>
        </Button>
      </LeftSection>
      <RightSection >
      <BackgroundAnimation/>
      </RightSection>
      
  </Section>
);

export default dynamic (() => Promise.resolve(Hero), {ssr: false}) //Hydration problem