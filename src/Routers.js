import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AuthContainer from './components/AuthContainer.js';

const Home = () => (
	<Router>
	<div className='container'>
  	<AuthContainer />
  	</div>
  </Router>
)


const Main = () => (
  <Router>
    <div>
     
    </div>
  </Router>
)

export default Home;
