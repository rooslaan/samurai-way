import React from 'react';
import {Post} from "./post/Post";

 export const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add Post</button>
            <Post message='Lorem ipsum'/>
            <Post message='Lorem'/>
            <Post message='i like Js'/>
            <Post message='Back is sh*t'/>
        </div>
    );
};
