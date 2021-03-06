// react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import OfferingsList from './OfferingsList';
// redux
import { updateOfferingsArr } from '../../../../redux/actions/OfferingsActions';
// seed
import { offeringsArr } from '../../../../seed/offerings';

/**
 * main
 */
const OfferingsListView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // make the fetch to api
    dispatch(updateOfferingsArr(offeringsArr));
    // TODO: fetch call here
  }, []);

  return (
    <div className="w100 page OfferingsListView flexcol" style={{ backgroundColor: `#eee` }}>
      {/* search/filter functionality */}
      <OfferingsList />
    </div>
  );
};

// export
export default OfferingsListView;
