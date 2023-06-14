import React from "react";
import "../Obtrusive/Obtrusive.css";

function ObtrusivePlayer() {
  return (
    <div>
      <p className="player">PLAYER NAME</p>
      <div>
        <p className="obtrusive">IS THE OBTRUSIVE</p>
        <img className="frame1" src="./assets/frame1.png"></img>
      </div>

      <div className="pic4">
        <img className="pic4" src="./assets/pic4.png"></img>
      </div>
    </div>
  );
}

export default ObtrusivePlayer;
