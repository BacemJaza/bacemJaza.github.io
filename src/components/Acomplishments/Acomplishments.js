import React from 'react';

import { Section, SectionTitle, SectionDivider, SectionSubText } from '../../styles/GlobalComponents';
import { Box, BoxNum, BoxText, BoxTitle, Boxes, LinkIcon, TextSection } from './AcomplishmentsStyles';
import { IoMdOpen } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { accomplishmentsData } from '@/constants/constants';
// import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


function stopShow(){
  // console.log("1")
}
function changeImage(){
  // console.log("2")
}

const Acomplishments = () => (
  <Section id='accomplishments'>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <SectionSubText></SectionSubText>
    <SectionDivider/>
    <Boxes>
      {accomplishmentsData.map((card,index) =>(
        <Box key={index}>
          
          <BoxNum src={card.image} alt="No image yet" onMouseOver={stopShow()} onMouseOut={changeImage()}/>
          <TextSection>
            <BoxTitle href={card.src} target='_blank'>
              {card.title}
              <IoMdOpen  style={{float:"right",color:"#FFFFFF", fontSize:"15px"}}/>
              </BoxTitle>
            <BoxText>{card.text}</BoxText>
            
          </TextSection>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
