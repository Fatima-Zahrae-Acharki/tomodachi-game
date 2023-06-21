import React from "react";
import "../Guess/GuessTheSub.css";
import { Link } from "react-router-dom";

function GuessTheSub() {
  return (
    <div>
      <h1 className="thesub">WHAT IS THE SUB ?</h1>
      <div className="allelements">
      <div className="yuno">
        <img id="yuno1" src="./assets/pic6.png"></img>
      </div>

      <div className="buttons2">
        <Link to="/Points">
        <button id="btn1">SUB</button> 
        </Link>
        <Link to="/Points">
        <button id="btn2">SUB</button></Link>
        <Link to="/Points">
        <button id="btn3">SUB</button></Link>
        <Link to="/Points">
        <button id="btn4">SUB</button></Link>
       
      </div>

      <div className="rin">
        <img id="rin1" src="./assets/pic7.png"></img>
      </div>
      </div>
    </div>
  );
}

export default GuessTheSub;
