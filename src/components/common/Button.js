import React, { Component } from 'react';
import './Common.css';

const Button = ({onClick, children}) =>{
    return (
      <a>
        <div className="button" onClick={onClick}>
          <h1 className="buttonText">{children}</h1>
        </div>
      </a>
    );
}

export default Button;
