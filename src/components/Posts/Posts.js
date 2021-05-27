import React from 'react';
import Post from './Post/Post';
import useStyles from './style';
import { useSelector } from 'react-redux';

const Posts = () =>{
const classes = useStyles();
const posts = useSelector((state)=>state.posts);
    return (
        <>
        <h1 className={classes.smMargin}>Posts</h1>
        <Post/>
        </>
    );
}

export default Posts;