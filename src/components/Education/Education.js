import { TimeLineData } from '@/constants/constants'
import { Section, SectionDivider, SectionText, SectionTitle } from '@/styles/GlobalComponents'
import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import { DetailsComponent, EducComponent, EducComponentContainer, EducationContainer, LineComponent } from './EducationStyles'
import {motion, useScroll, useTransform} from "framer-motion"

const LiIcon = ({reference}) =>{
  const {scrollYProgress} = useScroll(
    {
      target:reference,
      offset:["center end", "center center"]
    }
  );
  return(
    <figure style={{position:"absolute", marginLeft:"-145px", stroke:"#f2e9e4"}}>
      <svg width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" style={{stroke:"#f2e9e4", strokeWidth:"10px", fill:'none'}}/>
        <motion.circle cx="75" cy="50" r="20" style={{strokeWidth:"8px", stroke:"#0d1b2a", pathLength:scrollYProgress, left:0}}/>
        <circle cx="75" cy="50" r="10" style={{strokeWidth:"8px", fill:"#f2e9e4"}}/>
      </svg>
    </figure>
  )
}

const Education = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end", "center start"]
    }
  );
  return (
    <Section>
        <SectionTitle main>
            Education
        </SectionTitle>
        <SectionDivider/>
        <EducationContainer ref={ref}>
        <motion.div style={
                  {
                    position:'absolute',
                    borderLeft:"4px solid white",
                    height:'100%',
                    transformOrigin:"top",
                    marginLeft: "-50px",
                    scale:scrollYProgress,
                    opacity: scrollYProgress
                  }
                  }/>
          <SectionText>
          <EducComponentContainer>
            {TimeLineData.map((educ,index) =>(
              <EducComponent ref={ref1} key={index}>
                <div>
                {/* <LiIcon reference={ref1}/> */}
                </div>
              <div>
                <h3>{educ.position}&nbsp; <a href={educ.schoolLink}>@{educ.school}</a></h3>
                <div>
                  {educ.time} | <h5 style={{color:"white"}}>{educ.headline}</h5>
                </div>
                <div>
                  {educ.description}
                </div>
              </div>
            </EducComponent>
            ))}
          </EducComponentContainer>
          </SectionText>
          
        </EducationContainer>
        
    </Section>
  )
}

export default dynamic (() => Promise.resolve(Education), {ssr: false}) //Hydration problem

