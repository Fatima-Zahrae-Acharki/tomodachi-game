import React from "react";
import "../Game/Game.css";
import { Link } from "react-router-dom";

function Game() {
  return (
    <div className="container11">
      <div className="Players1">
        <div className="profile33">
          <img id="profile331" src="../assets/user1.png"></img>
          <img id="profile332" src="../assets/user1.png"></img>
          <img id="profile333" src="../assets/user1.png"></img>
          <img id="profile334" src="../assets/user1.png"></img>
          <img id="profile335" src="../assets/user1.png"></img>
        </div>
        <div className="playerNameee2">
          <text id="playerNameee31">PLAYER NAME</text>
          <text id="playerNameee32">PLAYER NAME</text>
          <text id="playerNameee33">PLAYER NAME</text>
          <text id="playerNameee34">PLAYER NAME</text>
          <text id="playerNameee35">PLAYER NAME</text>
        </div>
      </div>

      <div>
        <div className="ground">
          <div className="spinner">
            {/* <div id="chart"></div>
    
            <script src="../spinner.js" charset="utf-8"></script> */}
          </div>
          <div id="bacgroound">
            <img id="backgroundd" src="../assets/frame2.png"></img>
            <div id="questions">
              <input id="queestions" placeholder="Questions"></input>
            </div>
            <div id="buttonssss">
              <button id="yes">YES</button>
              <button id="skip">SKIP</button>
              <button id="no">NO</button>
            </div>
          </div>
        </div>
        <div className="vote">
          <Link to="/Vote">
          <button id="vote">VOTE</button>
          </Link>
        </div>
      </div>

      <div className="Players2">
        <div className="profile44">
          <img id="profile441" src="../assets/user1.png"></img>
          <img id="profile442" src="../assets/user1.png"></img>
          <img id="profile443" src="../assets/user1.png"></img>
          <img id="profile444" src="../assets/user1.png"></img>
          <img id="profile445" src="../assets/user1.png"></img>
        </div>
        <div className="playerNameee3">
          <text id="playerNameee41">PLAYER NAME</text>
          <text id="playerNameee42">PLAYER NAME</text>
          <text id="playerNameee43">PLAYER NAME</text>
          <text id="playerNameee44">PLAYER NAME</text>
          <text id="playerNameee45">PLAYER NAME</text>
        </div>
      </div>
    </div>
  );
}

export default Game;
