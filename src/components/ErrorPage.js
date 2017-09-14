import React, { Component } from 'react';
import './common/Common.css';
import { connect } from 'react-redux';
import { returnToHomepage } from '../actions';
import Button from './common/Button';
import Header from './common/Header';
import InputField from './common/InputField';

class ErrorPage extends Component {

	onButtonPress() {
		this.props.returnToHomepage();
	}
	
	render () {
	    return (
	     <div className='container'>
	     	<Header />
	     	<h1 className='errorRubrik'> 404 </h1>
			<Button children='Go Back' onClick={this.onButtonPress.bind(this)} />
	      </div>
	    )
    }
};


const mapStateToProps = ({ auth }) => {
	const { email, password } = auth;

	return { email, password };
};
export default connect(mapStateToProps,{ returnToHomepage })(ErrorPage);
