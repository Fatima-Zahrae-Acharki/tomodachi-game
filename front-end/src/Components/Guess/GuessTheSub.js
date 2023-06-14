import React from "react";
import "../Guess/GuessTheSub.css";

function GuessTheSub() {
  return (
    <div>
      <h1 className="thesub">WHAT IS THE SUB ?</h1>
      <div className="allelements">
      <div className="yuno">
        <img id="yuno1" src="./assets/pic6.png"></img>
      </div>

      <div className="buttons2">
        <button id="btn1">SUB</button>
        <button id="btn2">SUB</button>
        <button id="btn3">SUB</button>
        <button id="btn4">SUB</button>
      </div>

      <div className="rin">
        <img id="rin1" src="./assets/pic7.png"></img>
      </div>
      </div>
    </div>
  );
}

export default GuessTheSub;
