import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  padding: 1rem;
  padding-top: 2rem;
  max-height:75px;
  // background-color: black;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Span = styled.span `
  font-size: 2rem
`;




export const Div1 = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  display: flex;
  flex-direction: row;
  // align-content: center;
  height: fit-content;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: fit-content;
  
  @media ${(props) => props.theme.breakpoints.md} {
    // display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    // grid-area: 1 / 2 / 2 / 5;
    
  }
 
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  height: fit-content;
  // align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    
  }
`;

export const Mods = styled.div`
  display: flex;
  position: absolute;
  grid-area: 1 / 7 / 1 / 7;
  padding: 6px;
  flex-direction: column;
  background-color: hsl(232.7, 27.3%, 23.7%);
  width: fit-content;
  right: 0;
  height: 30%;
  z-index: 100;
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: 0;
    width: 100%;
    height: 100px;
    background-color: hsl(232.7, 27.3%, 23.7%);
    border-radius: 100% 0 0 0 / 30% 100% 0 0;
    transform: rotate(180deg);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
    
  }
  @media ${(props) => props.theme.breakpoints.md} {
    
    display: none;
  }

  
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display:none;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 6px;
  padding-bottom:10px;
height: fit-content;
width:100%;
&:hover {
    background-color: #212d45;
    // transform: scale(1.2);
    cursor: pointer;
    
  }
  
`