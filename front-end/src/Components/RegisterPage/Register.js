import React, { useState } from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";

function Register() {
  const [info1, setInfo] = useState({
    Email1: "",
    UserName1: "",
    Password1: "",
    ConfirmPassword1: "",
  });
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info1, [name]: value });
  };
  const handlesubmit1 = async () => {
    console.log(info1);
    console.log("clicked");
    // const res = await axios.post("/api/Register", info);
  };
  return (
    <div>
      <div className="elements1">
        <div className="inputElements1">
          <input
            type="text"
            placeholder="Email"
            className="email1"
            onChange={handleChange1}
            name="Email1"
          ></input>
          <input
            type="text"
            placeholder="Username"
            className="username"
            onChange={handleChange1}
            name="UserName1"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="password1"
            onChange={handleChange1}
            name="Password1"
          ></input>
          <input
            type="password"
            placeholder="Confirm password"
            className="confirmp"
            onChange={handleChange1}
            name="ConfirmPassword1"
          ></input>
        </div>
        <div className="buttons1">
          <Link to="/OnlineOffline">
            <button className="back1">BACK</button>
          </Link>
          <button className="register" onClick={handlesubmit1}>
            REGISTER
          </button>
        </div>
        <div>
          <p className="acc1">
            Already have an account ?{" "}
            <Link to="/Login" id="link">
              <a href="#" className="a">
                Login
              </a>
            </Link>
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
