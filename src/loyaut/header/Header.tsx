import React from 'react';
import './../../App.css'
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    grid-area: header;
    background-color: red;
    
    img {
        width: 40px;
    }
`