import React from "react";
import '../Points/Points.css'

function Points() {
  return (
    <div>
      <div>
        <div id="rank">
            <img id="crownnn" src="../assets/crown.png"></img>
            <text className="playerRank">1</text>
            <text className="playerRank">2</text>
            <text className="playerRank">3</text>
            <text className="playerRank">4</text>
            <text className="playerRank">5</text>
        </div>
        <div id="pnames">
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
        </div>
      </div>
      <div>
        <img id="pic8" src='../assets/pic8.png'></img>
      </div>
      <div id="pointss">
            <text className="points">Points</text>
            <text className="points">Points</text>
            <text className="points">Points</text>
            <text className="points">Points</text>
            <text className="points">Points</text>
      </div>
    </div>
  );
}

export default Points;