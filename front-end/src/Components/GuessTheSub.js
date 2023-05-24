import React from "react";
import "../GuessTheSub.css";

function GuessTheSub() {
  return (
    <div>
      <h1>WHAT IS THE SUB ?</h1>
      <div className="loginpic">
        <img className="loginpic" src="./assets/pic6.png"></img>
      </div>

      <div>
        <div className="buttons">
          <button className="btn1">SUB</button>
          <button className="btn2">SUB</button>
          <button className="btn3">SUB</button>
          <button className="btn4">SUB</button>
        </div>
      </div>

      <div>
        <img className="loginpic" src="./assets/pic7.png"></img>
      </div>
    </div>
  );
}

export default GuessTheSub;
