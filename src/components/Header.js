import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.div`

padding: 16px;
font-size: 14px;
line-height: 1.5;
color: hsla(0,0%,100%,.7);
background-color: #24292e;

a{
  font-size: 14px;
  color:white;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

@media screen and (max-width: 800px) {
  height: 35px;
  
}
@media screen and (max-width: 650px) {
  flex-direction: column;
  height: 65px;
  padding-bottom: 5px;
}
`


const WorkoutsHeader = () => {
  return (
    <div>
    <HeaderNav>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/home">Home</NavLink>
    </HeaderNav> 
    </div>
  )
}

export default WorkoutsHeader;