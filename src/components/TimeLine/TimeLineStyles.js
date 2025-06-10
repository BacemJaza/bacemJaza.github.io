
import styled from 'styled-components'


export const ModsSection = styled.div`
display:flex;
height : 100%;
justify-content:center;



`
export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
min-height: 80vh;
display: flex;
justify-content: center;
place-items: center;
column-gap: 4rem;
justify-content: space-around;
border-radius: 2%;
background-color: hsl(232.7,27.3%,23.7%);
width:100%;
margin-left:5%;
@media ${(props) => props.theme.breakpoints.lg} {
  width:95%;
}
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  width:95%;
  
}

`
export const BlogCard = styled.div`
  
cursor : pointer;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 350px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    margin-bottom:20px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Button = styled.button`
  height: auto;
  margin: 20px auto;
  border: 0;
  background: #0077b6;
  color: #dad7cd;
  padding: 1rem;
  font-weight: bold;
 
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`
