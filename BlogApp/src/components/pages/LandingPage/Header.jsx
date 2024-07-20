import React from "react";
import "./LandingCss/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleStart = ()=>{
    navigate("/home");
  }

  const handleLogin = ()=>{
     navigate("/login");
  }

  const handleSignup = ()=>{
     navigate("/signup");
  }

  return (
    <div>
      <div className="header">
        <div className="headercont">
          <ul className="horizontal-menu">
            <li>Orgin</li>
          </ul>
        </div>
        <div className="headercont">
          <ul className="horizontal-menu">
            <button className="startbuttom" onClick={handleStart}>Start</button>
            <button className="startbuttom" onClick={handleLogin}>Login</button>
            <button className="startbuttom" onClick={handleSignup}>SignUp</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;