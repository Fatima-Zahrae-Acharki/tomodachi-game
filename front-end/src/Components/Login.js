import React from "react";
import "../Login.css";

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
          <button className="back">BACK</button>
          <button className="login">LOGIN</button>
        </div>
        <div>
          <p className="acc">
            Don't have an account ? <a className="a" href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
