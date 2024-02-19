import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
var projectsList = [{
  title: "Project 1",
  description: "this a demo for the project"
},
{
  title: "Project 1",
  description: "this a demo for the project"
},
{
  title: "Project 1",
  description: "this a demo for the project"
}
];
const Projects = () => (
  <div>
    <Section  id='projects'>
    <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id,image,title,description,tags,source,visit})=>(
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag,i)=>(
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            {/* <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  </div>
);

export default Projects;