import React from 'react';

import { Section, SectionTitle, SectionDivider, SectionSubText } from '../../styles/GlobalComponents';
import { Box, BoxNum, BoxText, BoxTitle, Boxes, LinkIcon, TextSection } from './AcomplishmentsStyles';
import { IoMdOpen } from 'react-icons/io';
import { IconContext } from 'react-icons';
// import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { image:'',title: "APEK", text: 'Open Source Projects'},
  { image:'',number: 1000, text: 'Students', },
  { image:'',number: 1900, text: 'Github Followers', },
  { image:'',number: 5000, text: 'Github Stars', }
];
function stopShow(){
  // console.log("1")
}
function changeImage(){
  // console.log("2")
}

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <SectionSubText></SectionSubText>
    <SectionDivider/>
    <Boxes>
      {data.map((card,index) =>(
        <Box key={index}>
          
          <BoxNum src={card.image} alt="No image yet" onMouseOver={stopShow()} onMouseOut={changeImage()}/>
          <TextSection>
            <BoxTitle>
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
