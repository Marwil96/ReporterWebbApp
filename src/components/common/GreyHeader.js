import React, { Component } from 'react';
import './Common.css';

const GreyHeader = ({ subject, title }) =>{
    return (
     <div>
      	<div className='greyHeader'> 
      	<h2 className='subject'> {subject} </h2>
      	<h2 className='title'> {title}</h2>
      	</div>
     </div>
    );
}

export default GreyHeader;
