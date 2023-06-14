import React from "react";
import "../Vote/Vote.css";
import { Link } from "react-router-dom";

function Vote() {
  return (
    <div id="alldivs">
      <div id="divfirst">
        <div id="profiiile11">
          <img className="prooofilesss" src="../assets/user1.png"></img>
          <img className="prooofilesss" src="../assets/user1.png"></img>
          <img className="prooofilesss" src="../assets/user1.png"></img>
          <img className="prooofilesss" src="../assets/user1.png"></img>
          <img className="prooofilesss" src="../assets/user1.png"></img>
        </div>
        <div id="playerNameee">
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
        </div>
        <div id="Votebttn">
          <Link to="/GuessTheSub">
          <button className="Voootebttn1">Vote</button>
          <button className="Voootebttn2">Vote</button>
          <button className="Voootebttn3">Vote</button>
          <button className="Voootebttn4">Vote</button>
          <button className="Voootebttn5">Vote</button>
          </Link>
        </div>
      </div>
      
      <div id="divsec">
        <div id="proooofile22">
          <img className="proooofile22" src="../assets/user1.png"></img>
          <img className="proooofile22" src="../assets/user1.png"></img>
          <img className="proooofile22" src="../assets/user1.png"></img>
          <img className="proooofile22" src="../assets/user1.png"></img>
          <img className="proooofile22" src="../assets/user1.png"></img>
        </div>
        <div id="playeeeerNameee1">
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
          <text className="playeeerNameee">PLAYER NAME</text>
        </div>
        <div id="Votebttn1">
          <Link to="/GuessTheSub">
          <button className="Voootebttn6">Vote</button>
          <button className="Voootebttn7">Vote</button>
          <button className="Voootebttn8">Vote</button>
          <button className="Voootebttn9">Vote</button>
          <button className="Voootebttn0">Vote</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Vote;
