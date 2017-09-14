import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from './reducers';

import AuthContainer from './components/AuthContainer.js';
import MainList from './components/MainList.js';
import ErrorPage from './components/ErrorPage.js';
import ChooseCity from './components/ChooseCity.js';
import Button from './components/common/Button.js';

const history = createHistory()

const middleware = routerMiddleware(history)



const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, ReduxThunk)
)

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
      <Provider store={createStore(reducers, {}, applyMiddleware(middleware,ReduxThunk))}>
       <ConnectedRouter history={history}>
       <div>
        <Route path="/" component={AuthContainer} />
        <Route path="/ChooseCity" component={ChooseCity} />
        <Route path="/MainList" component={MainList} />
        <Route path="/404" component={ErrorPage} />
        </div>
      </ConnectedRouter>
      </Provider>
    </div>
    )
  }
}

export default App;
