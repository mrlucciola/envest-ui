// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { onKeyDownBlurAll } from './utils/keybinds';
import { updateLoginStatus } from './redux/actions/AuthActions';
// components
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
import SubNav from './components/elements/subNav/SubNav';
// styling
import './App.css';
// seed
import { profile } from './seed/testAuthProfile';
// constants
const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: 'lightgreen',
        },
        '&$active': {
          color: 'lightblue',
        },
      },
      active: {},
      completed: {},
    },
    MuiTab: {
      root: {
        minWidth: 100
      },
      wrapper: {
        fontWeight: 600,
        textTransform: 'none'
      }
    }
  },
  palette: {
    primary: {
      main: '#f4f4f4',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 600,
    },
    h4: {
      fontWeight: 700,
      fontSize: 25,
      letterSpacing: 0.9,
    },
    body1: {
      fontWeight: 500,
    },
  },
  darkBg: {
    '& *': {
      color: 'whitesmoke',
    },
  },
});
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eaebe8',
    minHeight: '100vh',
    maxHeight: '100vh',
    justifyContent: 'flex-start',
  },
  navGroup: {
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    // position: 'sticky',
    // top: 0,
    zIndex: 1,
  },
}));

// main
const App = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const appRef = useRef(null);
  // state
  const isTestMode = useSelector(s => s.auth.isTestMode);
  document.addEventListener('keydown', onKeyDownBlurAll, false);
  // effects
  // load the state for the activeprofile
  useEffect(() => {
    // load
    if (isTestMode) {
      dispatch(updateLoginStatus(true, profile));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${classes.root} flexcol`} ref={appRef}>
        <div className={`${classes.navGroup} flexcol w100`}>
          <MainNavBar />
          <SubNav />
        </div>
        <PageRouter />
      </div>
    </ThemeProvider>
  );
};

// export
export default App;
