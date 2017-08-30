import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const reporter = combineReducers({
  auth: AuthReducer
})

export default reporter;