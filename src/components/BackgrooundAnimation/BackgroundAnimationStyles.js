import styled from "styled-components"


export const BackgroundAnimationStyle = styled.div`
display: flex;
height: 500px;
z-index: 200;
background-image: url("/images/portfoliopic.png");
margin:50% -5% 0% 5%;
border:solid #2C304D;
border-radius:30%;
@media ${props => props.theme.breakpoints.md}{
    border:none;

}
@media ${props => props.theme.breakpoints.lg}{
    // height:40%;
    margin-left: -20%;
    border:none;
    border-radius:10%;
    background-image:none;

}
@media ${props => props.theme.breakpoints.sm}{
    border:none;
    border-radius:10%;
    background-image:none;
}

 
`