// react
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
// components
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
// utils
import { onKeyDownBlurAll } from './utils/keybinds';
// styling
import './App.css';
import { fixedHeight } from './components/utils/styleFxns';

// main
const App = () => {
  const isDarkMode = useSelector(s => s.view.isDarkMode);
  document.addEventListener('keydown', onKeyDownBlurAll, false);
  // style
  /** @type {React.CSSProperties} */
  const style = {
    justifyContent: `start`,
  };
  const appRef = useRef(null);

  return (
    <div
      className={`App w100 flexcol ${isDarkMode}`}
      style={{
        ...style,
        ...fixedHeight(100, 'vh'),
        flexFlow: `start`,
      }}
      ref={appRef}
    >
      <MainNavBar />
      <div
        className="w100 flexcol f1"
        style={{
          justifyContent: `start`,
        }}
      >
        <PageRouter />
        <div className="footer w100">Footer</div>
      </div>
    </div>
  );
};

// export
export default App;
