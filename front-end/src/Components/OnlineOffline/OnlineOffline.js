import React from "react";
import "../OnlineOffline/OnlineOffline.css";
import { Link } from "react-router-dom";


function OnlineOffline() {
  return (
    <div>
        <div className="div1">
          <Link to="/ViewProfile">
          <img id="profilee" src="./assets/user1.png"></img>
          </Link>
          <p id="name1" >Name: </p>
          <p id="lvll">lvl: </p>
          <p id="expp">exp: </p>
        </div>
        <div className="div2">
          <p id="cr">crowns: </p>
          <img id="crown" src="./assets/crown.png"></img>
          <p id="on">onigiris: </p>
          <img id="onigiri" src="./assets/onigiri.png"></img>
        </div>
        <div className="div3">
          <div>
            <img id="frame41" src="./assets/frame4.png"></img>
            <img id="offline" src="./assets/offline.png"></img>
            <Link to="/AddPlayer" id="link">
            <p id="Offline">OFFLINE</p>
            </Link>
          </div>
          <div>
            <img id="frame31" src="./assets/frame3.png"></img>
            <img id="online" src="./assets/online.png"></img>
            <p id="Online">ONLINE</p>
          </div>
        </div>
        <div className="btnn">
          <Link to="/">
          <button id="btn11">BACK</button>
          </Link>
        </div>
        <div className="store">
          <img id="store1" src="../assets/shop.png"></img>
        </div>
    </div>
  )
}

export default OnlineOffline;