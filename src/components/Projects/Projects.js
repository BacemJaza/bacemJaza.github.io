import { useState } from 'react';
import { Section, SectionTitle, SectionDivider, SectionSubText, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FaArrowCircleLeft, FaArrowCircleRight, FaWindowClose } from "react-icons/fa";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Logo, Tag, TagList, TitleContent, UtilityList, ChooseSection, ModalCard, ModalBody, ModalHeader, CardImg, ModalLogo, FilesImg } from './ProjectsStyles';
import React from 'react'
import ReactPlayer from "react-player";


const Projects = () => {
  function ShowProjects({id,image,logo,tags,title,description,visit,source,category, projectCategory}) {
    var style;
    var backgroundImageStyle;
    if(category == projectCategory){
      if(!image){
        style = {filter: "blur(2px)"};
        image = "/images/locked.png";
      }
    return (
      <div>
        <BlogCard key={id} style={style}>
              <div >
                <Logo src={logo}></Logo>
                <Img src={image}></Img>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <TagList>
              {tags.map((tag)=>(
                <Tag key={tag}>
                  {tag}
                </Tag>
              ))}
            </TagList>
            </div>
            <UtilityList>
              {(category!="Professional" && source)?(  
                <ExternalLinks href={source} target='_blank'>Code</ExternalLinks>
              ):(null)}   
              {!visit?<></>:<ExternalLinks href={visit} target='_blank'>Visit</ExternalLinks>}
              <ExternalLinks onClick={()=>{showModal=id;setShowModal(showModal);setItem(projectsSorted.filter((item)=>item.id==showModal))}} href='#modal'>Open</ExternalLinks>
              </UtilityList>                   
              
        </BlogCard>
        
      </div>
    )
            }
  }
  
  function incrementProjectCategoryF(i,projectCategories) {
    i++;
    setI(i);
    
    if(i>=projectCategories.length){
      i=0;
      setI(0);
    }
    setProjectCategory(projectCategories[i]);
  }
  function decrementProjectCategoryF(projectCategories) {
    i--;
    setI(i);
    
    if(i<0){
      i=2;
      setI(i);
    }
    setProjectCategory(projectCategories[i]);
  }
  const projectCategories = ["Professional","Local","School"];
  var [i,setI] = useState(0);
  const [projectCategory,setProjectCategory] = useState(projectCategories[0]);
  let [showModal,setShowModal] = useState(-1);
  const [item,setItem] = useState(null);
  let projectsSorted = projects.reverse();
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
        <div style={{fontSize:'2rem'}}>
        {projectCategory}
        </div>
        <FaArrowCircleRight size={20} cursor="pointer" onClick={()=>incrementProjectCategoryF(i,projectCategories)}/>
        </ChooseSection>
      </div>
      
      <SectionText>Here you'll find multiple projects made by me. You can choose between : School Projects - Professional Projects - Local projects</SectionText>
      <GridContainer>
        {projectsSorted.map(({id,image,logo,title,description,tags,source,visit,category},index)=>(
          <ShowProjects key={index} id={id} image={image} logo={logo} tags={tags} title={title} description={description} source={source} visit={visit} category={category} projectCategory={projectCategory}/>
        ))}
        {showModal!=-1?
        (<ModalCard id='modal'>
          <ModalHeader>
            <div>
              {item[0].title} 
            </div>
            <FaWindowClose onClick={()=>{showModal=-1;setShowModal(showModal);}} />
          </ModalHeader>
          <ModalBody>
          <CardInfo>{item[0].description}</CardInfo>
          {item[0].videoSrc?(
            <div>
            <CardInfo style={{paddingTop:"20px",textAlign:"center"}}>Demo video</CardInfo>
            <ReactPlayer
            style={{display:"flex",margin:"auto"}}
            width="50%"
            height="200px"
            url={item[0].videoSrc}
            controls={true}
            // light is usefull incase of dark mode
            light={false}
            // picture in picture
            pip={true}
          />
        </div>
          ):(null)}
          {item[0].filesLink?(
          <div>
            <CardInfo style={{paddingTop:"20px",textAlign:"center"}}>Related files</CardInfo>
            <FilesImg>
            {item[0].filesLink.map(file=>(
            <div key={file}>
              
              {file[1]?(
                <div>
                  <a                  
                    href={file[1]}
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color:"white",width:'fit-content'}}>
                      <CardImg src={file[0]}/>
                  </a>
                </div>
              ):(
                <CardImg src={file[0]}/>
              )}
            </div>
            ))}
            </FilesImg>
            
          </div>
          ):(null)} 
          </ModalBody>
        </ModalCard>)
        :(null)}
      </GridContainer>
    </Section>
  </div>
  )
}



export default Projects;