import React,{useEffect, useState} from 'react';
import useStyles from './style';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'

const Form = ({currentId,setCurrentId}) =>{
const classes = useStyles();
const [postData,setPostdata] = useState({
    creator:'', title:'', message:'', tags: '', selectedFile:''
});
const posts = useSelector((state)=> currentId ? state.posts.find((p)=>p._id == currentId): null);
const dispatch = useDispatch();

useEffect(()=>{
if(posts) setPostdata(posts);
},[posts]);

const handleSubmit = (e) =>{
    e.preventDefault();

    if(currentId){
        dispatch(updatePost(currentId, postData));
    }else{
        dispatch(createPost(postData));
    }

    clear();
}

const clear = () =>{
setCurrentId(null);
setPostdata({creator:'', title:'', message:'', tags: '', selectedFile:''});
}
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    fullWidth
                    value={postData.creator}
                    onChange={(e)=>setPostdata({...postData, creator:e.target.value})}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    fullWidth
                    value={postData.title}
                    onChange={(e)=>setPostdata({...postData, title:e.target.value})}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    fullWidth
                    value={postData.message}
                    onChange={(e)=>setPostdata({...postData, message:e.target.value})}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    fullWidth
                    value={postData.tags}
                    onChange={(e)=>setPostdata({...postData, tags:e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setPostdata({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            
            </form>

        </Paper>
    );
}

export default Form;