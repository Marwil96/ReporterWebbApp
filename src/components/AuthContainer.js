import React, { Component } from 'react';
import './common/Common.css';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import Button from './common/Button';
import Header from './common/Header';
import InputField from './common/InputField';

class AuthContainer extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
		
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password, name } = this.props;
		this.props.loginUser({ email, password });
	}
	render () {
	    return (
	     <div className='container'>
	     	<Header />
	     	<h1 className='rubrik'> Reporter </h1>
	     	<div className='inputContainer'>
		     	<InputField placeholder='user@test.com' onChange={this.onEmailChange.bind(this)} value={this.props.email} />
		     	<InputField placeholder='password' onChange={this.onPasswordChange.bind(this)} value={this.props.password} />
	     	</div>
	      	<div className='flexContainer'>
	      		<Button children='Login' onClick={this.onButtonPress.bind(this)} />
	      	</div>
	      </div>
	    )
    }
};

const mapStateToProps = ({ auth }) => {
	const { email, password } = auth;

	return { email, password };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(AuthContainer);
