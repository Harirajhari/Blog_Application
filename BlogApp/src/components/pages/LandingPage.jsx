import React from 'react';
import "../style/LandingPage.css"
import BodyContent from './BodyContent';
import Header from "./Header"

const LandingPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='landingPage_content'>
        <h1>Welcome to the Home Page</h1>
      </div>
      <div>
      <BodyContent />
      </div>
    </div>
  );
};

export default LandingPage;
