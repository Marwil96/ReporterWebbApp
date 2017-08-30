import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Home from './Routers.js';
import Button from './components/common/Button.js';


class App extends Component {
  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyCGGmIk8JNW5PdClidW7eCA2_Dk623cDyM',
    authDomain: 'reporter-542cd.firebaseapp.com',
    databaseURL: 'https://reporter-542cd.firebaseio.com',
    projectId: 'reporter-542cd',
    storageBucket: 'reporter-542cd.appspot.com',
    messagingSenderId: '969966364433'
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <div className='container'>
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Home />
      </Provider>
    </div>
    )
  }
}

export default App;
