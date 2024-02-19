import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle, TechnologiesList } from './TechnologiesStyles';
import dynamic from "next/dynamic";
import { TechnologiesData } from '@/constants/constants';

const Technologies = () =>  (
  <Section>
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider/>
    <SectionText>
      This is a demo for what I say in technologies section
    </SectionText>
    <Boxes>
      {TechnologiesData.map((tech,index) =>(
        <Box key={index}>
          <ListTitle>{tech.title}</ListTitle>
          
            {tech.description.map((t,index) =>(
            <TechnologiesList key={index}>
              {t.name}
              <ListIcon src={t.icon}/>
            </TechnologiesList>
            
          ))}
      </Box>
      ))} 
    </Boxes>
  </Section>
);

export default Technologies;
