import React from "react";
import "../Obtrusive.css";

function NotObtrusive() {
  return (
    <div>
      <p className="player">PLAYER NAME</p>
      <p className="notObtrusive">IS NOT THE OBTRUSIVE</p>
      <img className="frame2" src="./assets/frame2.png"></img>
      <div className="pic5">
        <img className="pic5" src="./assets/pic5.png"></img>
      </div>
    </div>
  );
}

export default NotObtrusive;
