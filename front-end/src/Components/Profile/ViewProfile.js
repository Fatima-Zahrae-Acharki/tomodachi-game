import React, { useState } from "react";
import "../Profile/ViewProfile.css";
import { Link } from "react-router-dom";
function ViewProfile() {
  const [info3, setInfo] = useState({
    ChangeName: "",
  });
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info3, [name]: value });
  };
  const handlesubmit3 = async () => {
    console.log(info3);
    console.log("changed");
    // const res = await axios.post("/api/ChangeName", info);
  };
  return (
    <div className="all1">
      <div className="profileComp">
        <p id="profile">PROFILE</p>
        <img id="avatar1" alt="" src="../assets/user1.png"></img>
        <text id="player-name">Player name</text>
        <text id="level1">Level: </text>
        <div className="rectangle-div"></div>
        <Link to="/OnlineOffline">
        <button id="back1">BACK</button>
        </Link>
      </div>
      <div className="items2">
        <img id="frame6" src="../assets/frame6.png" />
        <input type="text" placeholder="Change name" id="changeName" onChange={handleChange3}
            name="ChangeName"></input>
        <button id="changeBtn" onClick={handlesubmit3}>CHANGE</button>
        <p id="or">OR</p>
        <button id="removeAccount">REMOVE ACCOUNT</button>
      </div>
    </div>
  );
}

export default ViewProfile;
