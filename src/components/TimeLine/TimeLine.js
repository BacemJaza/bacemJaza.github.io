import React, { useState, useRef, useEffect } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Button } from './TimeLineStyles';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, ModsSection } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects, TimeLineData } from '../../constants/constants';
import { mods } from '../../constants/constants';
const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }


  return (
    <div>
    <Section>
      <SectionTitle main>About Me</SectionTitle>
      <SectionDivider/>
      <SectionText>
      I'm Jaza Bacem, 
      a web developer and Computer Science student with a passion for creating awesome digital experiences.
      </SectionText>
      
    </Section>
    <ModsSection>
    <GridContainer>
        {mods.map(({id,image,title,description,tags,source,visit})=>(
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <CardInfo>{description}</CardInfo>
              <Button>Check for more</Button>
              
            </TitleContent>
            
          </BlogCard>
          
        ))}
        
      </GridContainer>
      
      </ModsSection>
    </div>
  );
};

export default Timeline;
