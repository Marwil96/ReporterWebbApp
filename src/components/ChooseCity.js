import React, { Component } from 'react';
import './common/Common.css';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import Select from 'react-select';
import { saveCity, cityChanged } from '../actions';
import Button from './common/Button';
import Header from './common/Header';
import InputField from './common/InputField';
var cities = require('../json/kommuner.geo.json');


var options = [
  cities.map(city => (
  	{value:city.namn, label:city.namn}
  	)),
  {value:'two', label:'two'}
];

class ChooseCity extends Component {


	 logChange(val) {
  		console.log(val.value)
  		this.props.cityChanged(val.value);
	}

	onButtonPress() {
		const { city } = this.props;
		if(city === '') {
			console.log('no city')
		}
		else {
			this.props.saveCity({ city });
		}
	}
	render () {
	    return (
	     <div className='container'>
	     	<Header />
	     	<h1 className='rubrik'> Reporter </h1>
	     	<div className='inputContainer'>
	     		<h2 className='underRubrik'> Välj Stad </h2>
		     	<Select
		     className='selectStyle'
			  name="form-field-name"
			  value={this.props.city}
			  options={options[0]}
			  onChange={this.logChange.bind(this)}
			  clearable={false}
			/>
	     	</div>
	      	<div className='flexContainer'>
	      		<Button children='Continue' onClick={this.onButtonPress.bind(this)} />
	      	</div>
	      </div>
	    )
    }
};

const mapStateToProps = ({ auth }) => {
	const { city } = auth;

	return { city };
};

export default connect(mapStateToProps, { saveCity, cityChanged })(ChooseCity);
