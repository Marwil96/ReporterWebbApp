import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AuthReducer from './AuthReducer';

const reporter = combineReducers({
  auth: AuthReducer,
  router: routerReducer
})

export default reporter;