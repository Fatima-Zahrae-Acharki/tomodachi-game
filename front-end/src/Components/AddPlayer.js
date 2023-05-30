import React from "react";
import '../AddPlayer.css'

function AddPlayer() {
  return (
    <div>
      <div className="PlayerAdded">
        <img className="profile" src="../assets/user1.png"></img>
        <text>Player Name</text>
      </div>
      <div className="AddForm">
        <input type="text" placeholder="Add Player"></input>
        <input type="text" placeholder="Obtrusive"></input>
        <button className="add">ADD</button>
        <button className="play">PLAY</button>
        <button className="back">BACK</button>
      </div>
    </div>
  );
}

export default AddPlayer;