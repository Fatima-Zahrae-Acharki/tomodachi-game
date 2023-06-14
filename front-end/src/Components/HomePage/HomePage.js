import React from "react";
import "../HomePage/Home.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1 className="tomo">TOMODACHI GAME</h1>
      <text className="t1">ANIME VERSION</text>
      
      <div className="pic1">
        <img className="pic1" src="./assets/pic1.png"></img>
      </div>
      <Link to="/OnlineOffline">
      <button className="btnstart">START</button>
      </Link>
    </div>
  );
}

export default HomePage;
