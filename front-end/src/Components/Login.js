import React from "react";
import "../Login.css";

function Login() {
  return (
    <div>
      <div className="loginpic">
        <img className="loginpic" src="./assets/login.png"></img>
      </div>
      <div>
        <div>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
        </div>
        <div className="buttons">
          <button className="btn1">BACK</button>
          <button className="btn2">LOGIN</button>
        </div>
        <div>
          <p>
            Don't have an account ? <a href="./Register.js">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
