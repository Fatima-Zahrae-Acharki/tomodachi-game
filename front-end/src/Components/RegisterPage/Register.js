import React, { useState } from "react";
import "../LoginPage/Login.css";
import { Link } from "react-router-dom";

function Register() {
  // const [info1, setInfo] = useState({
  //   Email1: "",
  //   UserName1: "",
  //   Password1: "",
  //   ConfirmPassword1: "",
  // });
  // const handleChange1 = (e) => {
  //   const { name, value } = e.target;
  //   setInfo({ ...info1, [name]: value });
  // };
  // const handlesubmit1 = async () => {
  //   console.log(info1);
  //   console.log("clicked");
  //   // const res = await axios.post("/api/Register", info);
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const handleSubmit1 = async (e) => {
    e.preventDefault();// to not rel

    if (confirmPass === password) {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      console.log(data);
      alert("Welcome " + name + " you successfully have registered!");
      setName("");
      setEmail("");
      setPassword("");
      setconfirmPass("");
      window.location.href = "/login";
    } else {
      alert("passwords don't match");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit1} className="elements1">
        <div className="inputElements1">
          <input
            type="text"
            placeholder="Email"
            className="email1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // onChange={handleChange1}
            // name="Email1"
          ></input>
          <input
            type="text"
            placeholder="Username"
            className="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // onChange={handleChange1}
            // name="UserName1"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={handleChange1}
            // name="Password1"
          ></input>
          <input
            type="password"
            placeholder="Confirm password"
            className="confirmp"
            value={confirmPass}
            onChange={(e) => setconfirmPass(e.target.value)}
            // onChange={handleChange1}
            // name="ConfirmPassword1"
          ></input>
        </div>
        <div className="buttons1">
          <Link to="/OnlineOffline">
            <button className="back1">BACK</button>
          </Link>
          <button
            className="register"
            type="submit"
            // onClick={handlesubmit1}
          >
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
      </form>
      <div className="Registerpic">
        <img className="Registerpic" src="./assets/register.png"></img>
      </div>
    </div>
  );
}

export default Register;
