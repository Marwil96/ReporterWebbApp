import React, { Component } from 'react';
import './Common.css';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

const InformationBox = ({ subject }) =>{
    return (
     <div className='informationBox'>
      	<div> 
      	<h2 className='informationBoxText'> {subject} </h2>
      	</div>
     </div>
    );
}

export default InformationBox;
