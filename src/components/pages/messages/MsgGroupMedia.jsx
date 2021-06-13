// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import MessagesList from './MessagesList';
import MsgInput from './MsgInput';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexFlow: 'row',
    display: 'flex',
    overflow: `hidden`,
  },
  paper: {
    width: `300px`,
    flexFlow: 'column',
    height: '100%',
    scrollY: 'scroll'
  },
  container: {
    maxHeight: `100%`,
    height: `100%`,
    minHeight: `100%`,
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
  },
  listHeader: {
    fontWeight: 600,
    color: green[500]
  },
  button: {
    padding: 5
  }
}));

/**
 * main
 *
 */
const MsgGroupMedia = () => {
  // init hooks
  const classes = useStyles();
  // state
  const activeConversationObj = useSelector(s => s.view.messages.activeConversationObj);

  return (
    <Paper container className={`MsgGroupMedia ${classes.root}`}>
      <div className={classes.container}>
        {activeConversationObj && <MessagesList />}
        <MsgInput />
      </div>
      {/* <MsgContainer /> */}
      <Paper square className={`MsgGroupMedia ${classes.paper}`}>
        <a className={classes.listHeader}>
          <IconButton className={`CreateConversation ${classes.button}` }>
            <AddIcon style={{ color: green[500], fontSize: 20, fontWeight: 'bold' }} />
          </IconButton>
          Add Member
        </a>
        <Divider variant="fullWidth" />

        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Linda Powell" src="/static/media/linda-powell-thumbnail.abcf73f9.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Linda Powell"/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Rob Sherman" src="/static/media/linda-powell-thumbnail.abcf73f9.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Rob Sherman" secondary="(You)"/>
          </ListItem>
        </List>

        <Divider variant="fullWidth" />

        <a className={classes.listHeader}>
          <IconButton className={`CreateConversation ${classes.button}` }>
            <AddIcon style={{ color: green[500], fontSize: 20, fontWeight: 'bold' }} />
          </IconButton>
          File Sharing</a>
        <Divider variant="fullWidth" />

      </Paper>
    </Paper>
  );
};

// export
export default MsgGroupMedia;
