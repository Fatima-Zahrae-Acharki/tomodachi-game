import React, { useState } from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [info, setInfo] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handlesubmit = async () => {
    console.log(info);
    console.log("clicked");
    // const res = await axios.post("/api/Login", info);
  };
  return (
    <div>
      <div className="loginpic">
        <img className="loginpic" src="./assets/login.png"></img>
      </div>
      <div className="elements">
        <div className="inputElements">
          {/* <form onSubmit={} ></form> */}
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            className="email"
            name="Email"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="password"
            onChange={handleChange}
            name="Password"
          ></input>
        </div>

        <div className="buttons">
          <Link to="/OnlineOffline">
            <button className="back">BACK</button>
          </Link>
          <button onClick={handlesubmit} className="login">
            LOGIN
          </button>
        </div>
        <div>
          <p className="acc">
            Don't have an account ?{" "}
            <Link to="/Register" id="link">
              {" "}
              <a className="a" href="#">
                Register
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
