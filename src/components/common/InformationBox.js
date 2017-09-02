import React, { Component } from 'react';
import './Common.css';

const InformationBox = ({ subject, title }) =>{
    return (
     <div className='informationBox'>
      	<div> 
      	<h2 className='subject'> {subject} </h2>
      	<h2 className='title'> {title}</h2>
      	</div>
     </div>
    );
}

export default InformationBox;
