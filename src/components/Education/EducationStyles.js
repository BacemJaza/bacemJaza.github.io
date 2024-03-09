import styled from "styled-components";


export const LineComponent = styled.div`
    border-left: 4px solid white;
    height: 50%;
    position: absolute;
    top: 0;
    transform-origin: top;
    margin-top:70px;
    margin-left: -50px;
`
export const EducComponent = styled.div`
    margin-top : 8px;
    margin-bottom: 8px;
    padding-bottom: 70px;
    :first {
        margin-top: 0;
    }
    :last {
        margin-bottom: 0;
    }
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: col;
    justify-content: space-between;
    align-items: center;

`
export const EducationContainer = styled.div`
    width: 75%;
    height:60%;
    margin:auto;
    position: relative;
    padding-top: 75px;
`
export const EducComponentContainer = styled.ul`
    width: full;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-left: 4px;
    text-align:justify;
`
