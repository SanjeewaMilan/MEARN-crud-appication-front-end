
import React,{useState} from 'react';
import useStyles from './style';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts'
const Form = () =>{
const classes = useStyles();
const [postData,setPostdata] = useState({
    creator:'', title:'', message:'', tags: '', selectedFile:''
});

const dispatch = useDispatch();
const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createPost(postData));
}

const clear = () =>{

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