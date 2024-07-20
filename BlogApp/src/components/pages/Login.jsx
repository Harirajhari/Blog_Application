import React from 'react';
import "../style/Login.css"
import LandingPage from './LandingPage';
import Header from './Header';

const Login = () => {
  return (
    <div>
        <div>
            <Header />
        {/* <LandingPage /> */}
        </div>
        <h1 className='login_page'>Login</h1>
    </div>
  )
}

export default Login