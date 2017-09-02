import React, { Component } from 'react';
import './common/Common.css';
import { connect } from 'react-redux';
import { saveCity, cityChanged } from '../actions';

import GreyHeader from './common/GreyHeader';
import Sidebar from './common/Sidebar';
import InformationBox from './common/InformationBox';


class MainList extends Component {


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
	     	<div className='informationBoxContainer'>
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />
	     		<InformationBox />

	     	</div>
	      </div>
	    )
    }
};

const mapStateToProps = ({ auth }) => {
	const { city } = auth;

	return { city };
};

export default connect(mapStateToProps, { saveCity, cityChanged })(MainList);
