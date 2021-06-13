// react
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import {createConversation} from '../../../redux/actions/ViewActions';
import TextEditor from '../../elements/editor/editor';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    display: `flex`,
    flexFlow: 'row',
    alignItems: 'end',
    padding: `5px 10px`,
  },
  inputContainer: {
    display: 'flex',
    flexFlow: 'row',
    flex: 1,
    padding: `10px`,
  },
  input: {
    flex: 1,
  },
  send: {
    justifyContent: 'flex-end',
    flexFlow: 'column',
    display: 'flex',
  },
  button: {
    height: 40,
    margin: 5,
    color: 'whitesmoke',
    backgroundColor: '#87a1d2',
    '&:hover': {
      backgroundColor: '#aec2e8',
    },
  },
}));

/**
 * main
 *
 */
const MsgInput = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [messageText, setTextMessage] = useState('');
  const onSend = () => {
    console.log('button clicked');
    dispatch(createConversation({
      userId: 'user1',
      messageText: messageText
    }));
  }
  return (
    <Paper square className={`MsgInput ${classes.root}`}>
      {/*<textarea
        className={classes.input}
        multiline
        variant="outlined"
        placeholder="Write message here"
        size="small"
        margin="dense"
      />*/}
      <TextEditor onChange={(text) => {
        setTextMessage(text);
      }}/>
      <Button variant="contained" className={classes.button} onClick={onSend}>
        Send
      </Button>
    </Paper>
  );
};

// export
export default MsgInput;
