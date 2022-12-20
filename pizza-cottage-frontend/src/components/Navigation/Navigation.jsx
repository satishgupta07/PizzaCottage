import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Link to="/">Home</Link> <br/>
      <Link to="/about">About</Link>
    </>
  )
}

export default Navigation;