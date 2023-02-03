import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

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
  </Section>
);

export default Hero;