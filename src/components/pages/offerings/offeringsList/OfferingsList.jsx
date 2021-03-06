// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
// components
import OfferingCard from './OfferingCard';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    paddingTop: '20px',
  },
  emptyList: {
    flexWrap: `wrap`,
    justifyContent: `center`,
    padding: `0 50px`,
    maxWidth: `100%`,
  },
}));
const test = true;

// main
const OfferingsList = () => {
  // init hooks
  const classes = useStyles();
  // state
  const offeringsArrLen = useSelector(s => s.offerings.offeringsArr.length);
  // build fxn
  const offeringsArrElem = [];
  for (let idx = 0; idx < offeringsArrLen; idx += 1) {
    offeringsArrElem.push(<OfferingCard idx={idx} />);
  }

  return test ? (
    <GridList cellHeight={300} className={classes.gridList} cols={3}>
      {offeringsArrElem}
    </GridList>
  ) : (
    <div className={`"OfferingsList ${classes.emptyList} flexrow w100`}>{offeringsArrElem}</div>
  );
};

// export
export default OfferingsList;
