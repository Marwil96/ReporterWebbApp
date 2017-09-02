import React, { Component } from 'react';
import './Common.css';

const Sidebar = ({ subject, title }) =>{
    return (
     <div className='sidebar'>
      	<div className='sidebarContainer'> 
      	<h2 className='sidebarSubject'>Reporter</h2>
      	<h2 className='sidebarTitle'>List</h2>
      	<h2 className='sidebarSubject'>Map</h2>
      	<h2 className='sidebarTitle'>Settnings</h2>
      	<h2 className='sidebarTitle'>Sign Out</h2>

      	</div>
     </div>
    );
}

export default Sidebar;
