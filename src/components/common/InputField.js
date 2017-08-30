import React, { Component } from 'react';
import './Common.css';

const InputField = ({ placeholder, value, autofocus, onChange }) =>{
    return (
     <div> 
      	<input 
	      	className='inputField' 
	      	value={value} 
	      	placeholder={placeholder} 
	      	autofocus={autofocus} 
	      	onChange={onChange} 
      	/>
     </div>
    );
}

export default InputField;
