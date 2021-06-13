// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import OfferingsListView from './offerings/offeringsList/OfferingsListView';
import OfferingDetail from './offerings/offeringDetail/OfferingDetail';
import NotFound from './home/NotFound';
import LoginForm from './profile/LoginForm';
import FeedView from './feed/FeedView';
import Home from './home/Home';
import CreateProfile from './profile/CreateProfile';
import CreateOffering from './offerings/CreateOffering';
import ProfileView from './profile/ProfileView';
import PortfolioView from './portfolio/PortfolioView';
import MessagesView from './messages/MessagesView';
import RSVPView from './rsvp/RSVPView';

// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100vh`,
    minHeight: `100%`,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: `100%`,
    '& > div': {
      maxWidth: '1300px',
    },
    alignSelf: 'center',
    overflow: 'scroll',
  },
  footer: {
    backgroundColor: `black`,
    padding: `10px 20px`,
    height: `40px`,
    color: 'white',
  },
}));

/**
 * main
 */
const PageRouter = () => {
  // init hooks
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return (
    <div className={`${classes.root} PageRouter flexcol`}>
      <Switch>
        <Route path="/profile/:alias" render={p => <ProfileView props={p} />} />
        <Route exact path="/offering/:offeringId" render={p => <OfferingDetail props={p} />} />
        <Route exact path="/offerings" render={p => <OfferingsListView props={p} />} />
        <Route exact path="/" render={p => <Home props={p} />} />
        <Route exact path="/feed" render={p => <FeedView props={p} />} />
        <Route exact path="/login" render={p => <LoginForm props={p} />} />
        <Route
          exact
          path="/portfolio"
          render={p => isAuthenticated && <PortfolioView props={p} />}
        />
        <Route exact path="/messages" render={p => isAuthenticated && <MessagesView props={p} />} />
        <Route
          exact
          path="/register"
          render={p => !isAuthenticated && <CreateProfile props={p} />}
        />
        <Route
          exact
          path="/offering/new"
          render={p => isAuthenticated && <CreateOffering props={p} />}
        />
        <Route exact path="/rsvp/:rsvpId" render={p => <RSVPView props={p} />} />
        <Route render={p => <NotFound props={p} />} />
      </Switch>
      {/* <Grid item className={`${classes.footer} w100`}>
        Footer
      </Grid> */}
    </div>
  );
};

// export
export default PageRouter;
