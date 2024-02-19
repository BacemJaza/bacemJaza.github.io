import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"
import { Container } from '../Header/HeaderStyles';
import dynamic from "next/dynamic";
import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <Container>
    <DropDownIcon/>
  </Container>
);

export default NavDropDown
