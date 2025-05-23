import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  max-height:270px;
  object-fit: cover;
  overflow: hidden;
  padding:20px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    height:80%;
    width:80%;
  }
  
  
`

export const Logo = styled.img`
  width:50%;
  height:100%;
  max-height:100px;
  object-fit: cover;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    height:80%;
    width:80%;
  }
  
  
`

export const ModalCard = styled.div`
position: absolute;
margin-top:-25%;
display:flex;
border: solid;
border-radius:40px;
z-index:1000;
background-color: #2C304D;
min-height:fit-content;
padding-bottom:100px;
min-width: 100%;
max-width: 80%;
align-items:center; 
flex-direction:column;
`
export const ModalBody = styled.div`
  padding-top:50px;
  width:80%;  

`
export const ModalHeader = styled.div`
  display:flex;
  align-items:center;
  padding-top:30px;
  margin-top:40px;
  flex-direction:row;
  justify-content: space-between;
  width:80%;
  padding:5px;
`

export const ModalLogo = styled.img`
  display:flex;
  width:150px;
  height:100px;
  object-fit: a uto;
  //background-color:white;
  //border-radius:50%;
  margin-left:-10%; 
  //margin-top:10%;
  padding:10px;
`

export const CardImg = styled.img`
  display:flex;
  width:30%;
  height:100%;
  object-fit: cover;
  // margin:auto;
  margin-left:35%;
  padding:10px;
`
export const GridContainer = styled.section`
display: flex;
flex-wrap: wrap;
padding: 3rem;
justify-content:center;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  cursor:pointer;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 300px;
  padding:20px;
  min-height:fit;
  height:550px;
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

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #003049;
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
  display: grid;
  grid-cols:2;
  justify-content: center;
  margin:5px;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
margin-bottom:20px;
&:hover{
  background: #801414;

}
`;
export const FilesImg = styled.div`
`
export const TagList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
border-bottom:solid 0.5px;
// border-radius:30%;
padding:2px;
`

export const ChooseSection = styled.div`
  display: flex;
  float:right;
  margin-top: 8%;
  padding:10px;
  font-size: 30px;
  align-items: center;
  
`


