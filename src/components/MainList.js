import React, { Component } from 'react';
import './common/Common.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { saveCity, cityChanged, fetchSubject } from '../actions';

import GreyHeader from './common/GreyHeader';
import Sidebar from './common/Sidebar';
import InformationBox from './common/InformationBox';


class MainList extends Component {
	componentWillMount() {
		this.props.fetchSubject()
		console.log('subject', this.props.subject);
	}

	informationBoxContainerRender() {
		return (
			<InformationBox subject={'Wop'}/>
			)
	}
	render () {
	    return (
	     <div className='container'>
	     	<Sidebar
	     	
	     	 />
	     	}
	     	}
	     	<GreyHeader 
	     	subject={'List'}
	     	title={'Skara'}
	     	/>
	     	<div> 
	     		<h3> latest </h3>
	     	</div>
	     	<div className='informationBoxContainer'>
	     		{this.informationBoxContainerRender()}

	     	</div>
	      </div>
	    )
    }
};

const mapStateToProps = ({ auth }) => {
	const { city, subject } = auth;

	return { city, subject };
};

export default connect(mapStateToProps, { saveCity, cityChanged, fetchSubject })(MainList);
