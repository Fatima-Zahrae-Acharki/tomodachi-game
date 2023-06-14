import React from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="elements1">
        <div className="inputElements1">
          <input type="text" placeholder="Email" className="email1"></input>
          <input type="text" placeholder="Username" className="username"></input>
          <input type="password" placeholder="Password" className="password1"></input>
          <input type="password" placeholder="Confirm password" className="confirmp"></input>
        </div>
        <div className="buttons1">
          <Link to="/OnlineOffline">
          <button className="back1">BACK</button>
          </Link>
          <button className="register">REGISTER</button>
        </div>
        <div>
          
          <p className="acc1"> 
            Already have an account ? <Link to="/Login" id="link"><a href="#" className="a">Login</a></Link>
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
