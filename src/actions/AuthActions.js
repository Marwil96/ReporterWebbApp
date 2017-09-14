import firebase from 'firebase';
import { push } from 'react-router-redux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, SAVE_CITY, CITY_CHANGED, SUBJECT_FETCH_SUCCESS } from './types';


export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text	
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const cityChanged = (text) => {
	return {
		type: CITY_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	console.log(email, password);
	return (dispatch) => {
	dispatch({ type: LOGIN_USER });

	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => loginUserFail(dispatch));

	};
};

export const saveCity = ({ city }) => {
	console.log(city)
	return (dispatch) => {
	dispatch({ type: SAVE_CITY });
	dispatch(push('/MainList'))
}
};

export const fetchSubject = () => {
	const { currentUser } = firebase.auth();
  return (dispatch) => {
  	if(currentUser === null){
  		dispatch(push('/404'))
  	}
  	else {
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/complaints`)
      .on('value', snapshot => {
        dispatch({ type: SUBJECT_FETCH_SUCCESS, payload: snapshot.val() });
      });
     }
  };
};

export const returnToHomepage = () => {
	return (dispatch)  => 
	{dispatch(push('/'))}
}
const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });

};

const loginUserSuccess = (dispatch, user) => {
	console.log(firebase.auth().currentUser.uid);
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
	dispatch(push('/ChooseCity'))
	console.log('Login Sucess', push('/button'));
};