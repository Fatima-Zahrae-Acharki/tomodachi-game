import React from "react";
import "../Loading/PlayersLoading.css";

function PlayersLoading() {
  return (
    <div id="alldivs">
      <div id="divfirst">
        <div id="profile11">
          <img className="profilesss" src="../assets/user1.png"></img>
          <img className="profilesss" src="../assets/user1.png"></img>
          <img className="profilesss" src="../assets/user1.png"></img>
          <img className="profilesss" src="../assets/user1.png"></img>
          <img className="profilesss" src="../assets/user1.png"></img>
        </div>
        <div id="playerNameee">
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
        </div>
      </div>
      <div className="pic10">
        <img src="../assets/pic10.png" id="pic10"></img>
      </div>
      <div id="divsec">
        <div id="profile22">
          <img className="profile22" src="../assets/user1.png"></img>
          <img className="profile22" src="../assets/user1.png"></img>
          <img className="profile22" src="../assets/user1.png"></img>
          <img className="profile22" src="../assets/user1.png"></img>
          <img className="profile22" src="../assets/user1.png"></img>
        </div>
        <div id="playerNameee1">
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
          <text className="playerNameee">PLAYER NAME</text>
        </div>
      </div>
      <div class="loading">
        <span id="l">L</span>
        <span id="o">o</span>
        <span id="a">a</span>
        <span id="d">d</span>
        <span id="i">i</span>
        <span id="n">n</span>
        <span id="g">g</span>
        <span id="d1">.</span>
        <span id="d2">.</span>
        <span id="d3">.</span>
      </div>
      <section class="dots-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </section>
    </div>
  );
}

export default PlayersLoading;
