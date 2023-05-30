import React from "react";
import "../ViewProfile.css";
function ViewProfile() {
  return (
    <div className="all">
      <div className="profile">
        <p>PROFILE</p>
        <img className="avatar" alt="" src="../assets/avatar.png"></img>
        <div className="player-name">Player name</div>
        <div className="level">Level: </div>
        <div className="rectangle-div" />
        <div className="xp"> xp</div>
        <div className="xp1"> xp</div>
      </div>
      <div className="items">
        <img className="frame6" src="../assets/frame6.png" />
        <div className="compo">
          <div className="changeName">
            <input type="text" placeholder="Change name"></input>
          </div>
          <div className="change">
            <button className="change">CHANGE</button>
          </div>
        </div>
        <p>OR</p>
        <button className="removeAccount">REMOVE ACCOUNT</button>
        <button className="back">BACK</button>
      </div>
    </div>
  );
}

export default ViewProfile;
