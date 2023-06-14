import React from "react";
import "../AddPlayer/AddPlayer.css";
import { Link } from "react-router-dom";

function AddPlayer() {
  return (
    <div>
      <div className="PlayerAdded">
        <div id="playeraddedpic">
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
        </div>
        <div id="pnamediv">
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
        </div>
        <div className="piiic">
          <img src="../assets/pic9.png" id="pic9"></img>
        </div>
      </div>
      <div className="AddForm">
        <div className="formgroup">
          <input type="text" placeholder="Add Player" id="adddPlayer"></input>
          <input type="text" placeholder="Obtrusive" id="oobtrusive"></input>
        </div>
        <div className="buuuttons">
          <button id="addd">ADD+</button>
          <Link to="/PlayersLoading">
          <button id="playy">PLAY</button>
          </Link>
        </div>
        <Link to="/OnlineOffline" id="link">
          <button id="backk">BACK</button>
          </Link>
      </div>
    </div>
  );
}

export default AddPlayer;
