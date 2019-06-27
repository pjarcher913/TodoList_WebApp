import React from 'react';
import {Link} from 'react-router-dom';

function header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to='/' style={linkStyle}>HOME</Link> | <Link to='/about' style={linkStyle}>ABOUT</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '15px'
};

export default header
