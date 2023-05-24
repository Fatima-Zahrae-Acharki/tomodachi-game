import React from "react";
import "../Login.css";

function Register() {
  return (
    <div>
      <div>
        <div>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Confirm password"></input>
        </div>
        <div className="buttons">
          <button className="btn1">BACK</button>
          <button className="btn2">REGISTER</button>
        </div>
        <div>
          <p>
            Already have an account ? <a href="./Login.js">Login</a>
          </p>
        </div>
      </div>
      <div className="Registerpic">
        <img className="Registerpic" src="./assets/register.png"></img>
      </div>
    </div>
  );
}

export default Register;
