import React from 'react';
import styled from "styled-components";

type NavBarItemPropsType = {
    title: string
}
export const NavBarItem = (props: NavBarItemPropsType) => <StyledNavBarItem><a href="">{props.title}</a></StyledNavBarItem>;

const StyledNavBarItem = styled.li`
    list-style: none;
`