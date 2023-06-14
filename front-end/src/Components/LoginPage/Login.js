import React from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="loginpic">
        <img className="loginpic" src="./assets/login.png"></img>
      </div>
      <div className="elements">
        <div className="inputElements">
            <input type="text" placeholder="Email" className="email"></input>
            <input type="password" placeholder="Password" className="password"></input>
        </div>
        
        <div className="buttons">
          <Link to="/OnlineOffline">
          <button className="back">BACK</button>
          </Link>
          <button className="login">LOGIN</button>
        </div>
        <div>
          <p className="acc">
            Don't have an account ? <Link to="/Register" id="link"> <a className="a" href="#">Register</a></Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
