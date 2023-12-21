import React from 'react';
import styled from "styled-components";

type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>
            <img src="https://jamadvice.com.ua/wp-content/uploads/2016/04/JamAdvice_com_ua_Margot_Robbie_3.jpg" alt=""/>
            <span>{props.message}</span>
            <div>
                <span>like</span>
            </div>
        </StyledPost>
    );
};

const StyledPost = styled.div`
    img {
        width: 50px;
    }
`
