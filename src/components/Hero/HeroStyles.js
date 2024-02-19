import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    // height: 50vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


export const RightSection = styled.div`
 
 
  position:relative;
  width: 100%;
  height:fit-content;
  
  // height: 100vh;
  // margin-top: 10%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
  }
  @media ${(props) => props.theme.breakpoints.md} {
    // width: 100%;
    display: flex;
    flex-direction: column;
    background: no-repeat;
    margin: 0 auto;
    
  }
  @keyframes wipe-enter1{
    0% {
      transform: translateX(-100px);
    }
  }
  
  @media  (prefers-reduced-motion: no-preference) {
    
      animation-name: wipe-enter1;
      animation-duration: 3s;
      
    
  }

 
`;
