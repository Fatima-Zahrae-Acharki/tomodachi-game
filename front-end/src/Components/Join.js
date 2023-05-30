import React from "react";
import "../OnlineOffline.css";


function Join() {
  return (
    <div>
        <div className="div1">
          <img className="profile" src="./assets/avatar.png"></img>
          <p>Name: </p>
          <p>lvl: </p>
          <p>exp: </p>
        </div>
        <div className="div2">
          <p>crowns: </p>
          <img className="crown" src="./assets/crown.png"></img>
          <p>onigiris: </p>
          <img className="onigiri" src="./assets/onigiri.png"></img>
        </div>
        <div className="div3">
          <div>
            <img className="frame2" src="./assets/frame2.png"></img>
            <img className="pen" src="./assets/pen.png"></img>
            <p>MAKE GAME</p>
          </div>
          <div>
            <img className="frame1" src="./assets/frame1.png"></img>
            <img className="join" src="./assets/join.png"></img>
            <p>JOIN FIND</p>
          </div>
          <div>
            <img className="frame2" src="./assets/frame2.png"></img>
            <img className="searching" src="./assets/searching.png"></img>
            <p>FIND</p>
          </div>
        </div>
        <div className="btn">
          <button className="btn1">BACK</button>
        </div>
    </div>
  )
}

export default Join;