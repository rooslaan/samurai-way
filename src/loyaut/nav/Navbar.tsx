import React from 'react';
import './../../App.css'
import {NavBarItem} from "./NavBarItem";
import styled from "styled-components";
export const Navbar = () => {
    return (
            <StyledNav>
                <ul>
                    <NavBarItem title='Profile'/>
                    <NavBarItem title='Messages'/>
                    <NavBarItem title='News'/>
                    <NavBarItem title='Music'/>
                    <NavBarItem title='Settings'/>
                </ul>
            </StyledNav>
    );
};

const StyledNav = styled.nav`
    grid-area: nav;
    background-color: #66d268;
`