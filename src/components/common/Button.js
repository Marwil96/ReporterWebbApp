import React, { Component, button } from 'react';
import './Common.css';

const Button = ({onClick, children}) =>{
    return (
      <a>
        <button className="button" onClick={onClick}>
          <h1>{children}</h1>
        </button>
      </a>
    );
}

export default Button;
