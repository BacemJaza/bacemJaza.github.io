import styled from "styled-components"


export const BackgroundAnimationStyle = styled.div`
background: no-repeat center center;
height: 100%;
width: 100%;
// // position: fixed;
z-index: 100;
// background-size:15%;
background-image: url("/images/portfoliopic.png");
@media ${props => props.theme.breakpoints.md}{
    
}

@media ${props => props.theme.breakpoints.sm}{
    
}
`