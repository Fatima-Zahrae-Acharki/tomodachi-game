import React from "react";
import "../OnlineOffline.css";


function OnlineOffline() {
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
            <img className="frame4" src="./assets/frame4.png"></img>
            <img className="offline" src="./assets/offline.png"></img>
            <p>OFFLINE</p>
          </div>
          <div>
            <img className="frame3" src="./assets/frame3.png"></img>
            <img className="online" src="./assets/online.png"></img>
            <p>ONLINE</p>
          </div>
        </div>
        <div className="btn">
          <button className="btn1">BACK</button>
        </div>
    </div>
  )
}

export default OnlineOffline;