import { useState } from 'react';
import { Section, SectionTitle, SectionDivider, SectionSubText, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Tag, TagList, TitleContent, UtilityList, ChooseSection } from './ProjectsStyles';
import React from 'react'



const Projects = () => {
  function ShowProjects({id,image,title,description,visit,source,category, projectCategory}) {
    var style;
    var backgroundImageStyle;
    if(category == projectCategory){
      if(!image){
        style = {filter: "blur(2px)"};
        image = "/images/locked.png";
      }
    return (
      <BlogCard key={id} style={style}>
              <div>
                <Img src={image}></Img>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
            </div>
        </BlogCard>
    )
            }
  }
  
  function incrementProjectCategoryF(projectCategories) {
    if(i==2){
      setI(0);
    }else setI(i+1);
    setProjectCategory(projectCategories[i]);
  }
  function decrementProjectCategoryF(projectCategories) {
    if(i==0){
      setI(2);
    }else setI(i-1);
    setProjectCategory(projectCategories[i]);
  }
  const projectCategories = ["Professional","Local","School"];
  const [i,setI] = useState(0);
  const [projectCategory,setProjectCategory] = useState(projectCategories[i]);
  
  return (
    <div>
    <Section  id='projects'>
      <div>
      <SectionTitle main>
        Projects
        <br/>
        <SectionDivider/>
      </SectionTitle>
      <ChooseSection>
        <FaArrowCircleLeft size={20} cursor="pointer" onClick={(e)=>decrementProjectCategoryF(projectCategories)}/>
        <div>
        {projectCategory}
        </div>
        <FaArrowCircleRight size={20} cursor="pointer" onClick={(e)=>incrementProjectCategoryF(projectCategories)}/>
        </ChooseSection>
      </div>
      
      <SectionText>Here you'll find multiple projects made by me. You can choose between : School Projects - Professional Projects - Local projects</SectionText>
      <GridContainer>
        {projects.map(({id,image,title,description,tags,source,visit,category},index)=>(
          <ShowProjects key={index} id={id} image={image} title={title} description={description} source={source} visit={visit} category={category} projectCategory={projectCategory}/>
        ))}
      </GridContainer>
    </Section>
  </div>
  )
}



export default Projects;