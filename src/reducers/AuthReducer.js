/* eslint-disable eol-last */
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: 'test@test.com' };
		case PASSWORD_CHANGED:
			return { ...state, password: 'password' };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, email: '', password: '' };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };
		
		default:
			return state;
	}
};