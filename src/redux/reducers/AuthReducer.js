import _ from 'lodash';
import { combineReducers } from 'redux';
import * as types from '../types/AuthTypes';

const initialStateMain = {
  activeProfile: null,
  login: {
    fields: {
      username: { value: '', error: '' },
      password: { value: '', error: '' },
    },
  },
  isAuthenticated: false,
  isTestMode: false,
};
const MainReducer = (state = _.cloneDeep(initialStateMain), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_LOGIN_FIELD:
      newState.login.fields[action.fieldName].value = action.value;
      newState.login.fields[action.fieldName].error = action.error;
      return newState;
    case types.UPDATE_LOGIN_STATUS:
      newState.isAuthenticated = action.isLoggedIn;
      newState.activeProfile = action.profileObj;
      return newState;
    case types.RESET_LOGIN_FORM:
      newState.login.fields = _.cloneDeep(initialStateMain.login.fields);
      return newState;
    default:
      return newState;
  }
};

const AuthReducer = combineReducers({
  main: MainReducer,
});

export default MainReducer;
