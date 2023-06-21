
import React, { useState } from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";
// import axios from "../LoginPage/AXIOS";

function Login() {


  const [email, setEmail]= useState();
  const [password, setPassword]= useState();

    // const submitForm = () => {
    //     console.log(email + ' ' + password);

    //     //call the api

    const handleSubmit1 = async (e) => {
        e.preventDefault();// to not reload
    
        if (password=== password) {
          const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
    
          console.log(data);
          console.log(email + ' ' + password);
          alert("Welcome " + email + " you successfully have logged in!");
          setEmail("");
          setPassword("");
          window.location.href = "/OnlineOffline";
        } else {
          alert("error");
        }
      };

           



  

  // const [info, setInfo] = useState({
  //   Email: "",
  //   Password: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInfo({ ...info, [name]: value });
  // };
  // const handlesubmit = async () => {
  //   console.log(info);
  //   console.log("clicked");
  //   // const res = await axios.post("/api/Login", info);
  // };

  

  return (
    <div>
      <div className="loginpic">
        <img className="loginpic" src="./assets/login.png"></img>
      </div>
      <form className="elements">
        <div className="inputElements">
          {/* <form onSubmit={} ></form> */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            // onChange={handleChange}
            // onChange={handlinputChange}
            className="email"
            name="Email"
          ></input>
          <input
          value={password}
            type="password"
            placeholder="Password"
            className="password"
            onChange={e=>setPassword(e.target.value)}
            // onChange={handleChange}
            // onChange={handlinputChange}
            name="Password"
          ></input>
        </div>

        <div className="buttons">
          <Link to="/OnlineOffline">
            <button className="back">BACK</button>
          </Link>
          <button 
          type="submit"
        //   onClick={handleSubmit} 
        onClick={handleSubmit1}
          className="login">
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
      </form>
    </div>
  );
}

export default Login;