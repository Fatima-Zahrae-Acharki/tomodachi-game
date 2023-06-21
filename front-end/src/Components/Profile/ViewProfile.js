import React, { useEffect, useState } from "react";
import "../Profile/ViewProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ViewProfile() {


  const [players , setPlayers]=useState([])

  const getPlayers=async()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/show")
    setPlayers(res.data)
    console.log(players)
  };

  useEffect(()=>{
    getPlayers()
  },[])

  

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
        <input type="text" placeholder="Change name" id="changeName" 
            name="ChangeName"></input>
        <button id="changeBtn" type="submit">CHANGE</button>
        <p id="or">OR</p>
        <button id="removeAccount">REMOVE ACCOUNT</button>
      </div>
    </div>
  );
}

export default ViewProfile;
