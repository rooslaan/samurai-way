import React from 'react';
import './../../App.css'
import styled from "styled-components";
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
            <StyledProfile>
                <img className="photo" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt=""/>
                <div className={'con'}>ava + description</div>
                <div>My posts</div>
                <MyPosts/>
            </StyledProfile>
    );
};

const StyledProfile = styled.div`
    grid-area: content;
    background-color: #4cecca;

   .con {
        color: red;
    }
    
    img {
        margin: 0 auto;
    }
`