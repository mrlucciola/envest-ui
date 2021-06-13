import React from 'react';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import {Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import LaunchIcon from '@material-ui/icons/Launch';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import RSVPHome from './RSVPHome';
import RSVPDetails from './RSVPDetails';
import RSVPAttendees from './RSVPAttendees';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexGrow: 1,
        padding: 10
    },
    eventCardWrapper: {
        marginBottom: 10
    },
    eventHeader: {
        position: 'relative',
    },
    eventHeaderCover: {
        maxHeight: '250px',
        '& img' : {
            width: '100%',

        }
    },
    eventHeaderDisplayPicture: {
        display: 'inline-block',
        maxHeight: 150,
        maxWidth:150,
        zIndex:1,
        backgroundColor: 'white',
        padding: 5,
        '& img' : {
            width: '100%',
            marginTop: -90
        }
    },
    eventContent: {
        display: 'relative',
        padding: '0px 24px 12px'
    },
    eventTopCardTitle: {
        fontSize: '1.5rem',
        fontWeight: 600,
        margin: 0
    },
    eventTopCardEventBy: {
        lineHeight: '1.5rem',
        '& span': {
            paddingLeft: 3
        }
    },
    eventListItems: {
        '& li': {
            paddingLeft: 0,
            padding: 0,
            '& .MuiListItemIcon-root': {
                minWidth: 30
            }
        },
        '& li:last-child': {
            paddingTop: 10
        }
    },
    eventAttendees: {
        minWidth: 'fit-content',
        paddingTop: '10px',
        '& .MuiListItemAvatar-root': {
            minWidth: 'fit-content'
        },

        '& .MuiListItemAvatar-root:nth-of-type(n+2)' : {
            marginLeft: -6
        },
        '& .MuiListItemAvatar-root .MuiAvatar-root': {
            width: 32,
            height: 32,
        },
        '& .MuiListItemAvatar-root:last-child .MuiAvatar-root': {
            fontSize: '0.8rem',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 600
        }
    },
    actionButtonsContainer: {
        display: 'flex',
        margin: '10px 0',
        gap: 5
    },
    containedButton: {
        borderRadius: 25,
        backgroundColor: '#1166c2',
        color: 'white',
        padding: '5px 25px',

        '& .MuiButton-label': {
            fontWeight: 600,
            textTransform: 'none'
        }
    },
    buttonPrimary: {
        border: '1px solid',
        borderRadius: 25,
        borderColor: '#1166c2',
        color: '#1166c2',
        backgroundColor: 'white',
        padding: '5px 15px',
        '& .MuiButton-label': {
            fontWeight: 600,
            textTransform: 'none'
        }
    },
    buttonSecondary: {
        border: '1px solid',
        borderRadius: 25,
        borderColor: '##666666',
        color: '##666666',
        backgroundColor: 'white',
        padding: '5px 15px',
        '& .MuiButton-label': {
            fontWeight: 600,
            textTransform: 'none'
        }
    },
    tabsContainer: {
        '& .MuiTab-root': {
            minWidth: 100
        }
    },
    tabsContent: {
        padding: '0px 24px 12px'
    }
});

const RSVPView = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const styles = useStyles();
    return (
        <Container>
            <Grid container spacing={1} className={styles.wrapper}>

                <Grid item xs={12} md={8}>
                    <Grid className={styles.eventCardWrapper}>
                        <Paper>
                            <div className={styles.eventHeader}>
                                <div className={styles.eventHeaderCover}>
                                    <img src="https://via.placeholder.com/800x200"></img>
                                </div>
                            </div>
                            <div className={styles.eventContent}>
                                <div className={styles.eventHeaderDisplayPicture}>
                                    <img src="https://via.placeholder.com/150"></img>
                                </div>
                                <h1 className={styles.eventTopCardTitle}>Advanced tips & tricks - Skyrocket your Productivity with Microsoft Outlook</h1>
                                <div className={styles.eventTopCardEventBy}>
                                    <Typography variant="p">
                                        Event by
                                        <span>
                                        <a>Smart Events International</a>
                                    </span>
                                    </Typography>
                                    <List className={styles.eventListItems}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <VideocamIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Online" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EventIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="May 20, 2021, 9:00 PM - 10:30 PM (your local time)" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <LaunchIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Registration Link" />
                                        </ListItem>

                                        <ListItem className={styles.eventAttendees} >
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar`}
                                                    src={`https://material-ui.com/static/images/avatar/1.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar`}
                                                    src={`https://material-ui.com/static/images/avatar/1.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar`}
                                                    src={`https://material-ui.com/static/images/avatar/1.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar`}
                                                    src={`https://material-ui.com/static/images/avatar/1.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar`}
                                                    src={`https://material-ui.com/static/images/avatar/1.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    99+
                                                </Avatar>
                                            </ListItemAvatar>
                                        </ListItem>
                                    </List>
                                </div>
                                <div className={styles.actionButtonsContainer}>
                                    <Button variant="contained" className={styles.containedButton}>
                                        Invite Connections
                                    </Button>
                                    <Button className={styles.buttonPrimary}>
                                        Share
                                    </Button>
                                    <Button className={styles.buttonSecondary}>
                                        More
                                    </Button>
                                </div>
                            </div>
                            <hr></hr>
                            <div className={styles.tabsContainer}>
                                <Tabs
                                    value={value} onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="secondary"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="Home" />
                                    <Tab label="Details" />
                                    <Tab label="Attendees" />
                                </Tabs>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid>
                        <Paper container>
                            {value === 0 && <RSVPHome/>}
                            {value === 1 && <RSVPDetails/>}
                            {value === 2 && <RSVPAttendees/>}
                        </Paper>
                    </Grid>

                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper style={{padding: 20}}>
                        Right SideBar
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    );
};

export default RSVPView;