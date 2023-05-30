import React from "react";
import "../Game.css";

function Game() {
  return (
    <div>
      <div className="Players">

      </div>

      <div>
        <div className="spinner">

        </div>
        <div className="ground">
          <div className="bacground">
            <img className="background" src="../assets/frame2.png"></img>
            <div className="questions"></div>
            <div className="buttons">
              <button className="yes">YES</button>
              <button className="skip">SKIP</button>
              <button className="no">NO</button>
            </div>
          </div>
        </div>
        <div className="vote">
          <button>VOTE</button>
        </div>
      </div>

      <div className="Players">
        
      </div>
    </div>
  );
}

export default Game;
