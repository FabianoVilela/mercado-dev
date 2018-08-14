import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.png';


const HeaderMain = (props) => {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <h1 className='display-3 text-center'><img src={logo} className='App-logo' alt='logo' width='200' /></h1>
        <p className='text-center'>
          <Link className='btn btn-anuncie btn-lg' to='/new' role='button'>
          Free advertise &raquo;
          </Link></p>
      </div>
    </div>
  )
}

export default HeaderMain