import React from "react";
import '../Points.css'

function Points() {
  return (
    <div>
      <div>
        <div className="rank">
            <text className="playerRank">1</text>
            <text className="playerRank">2</text>
            <text className="playerRank">3</text>
            <text className="playerRank">4</text>
            <text className="playerRank">5</text>
        </div>
        <div className="names">
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
            <text className="playerName">PLAYER NAME</text>
        </div>
      </div>
      <div>
        <img className="pic8" src='../assets/pic8.png'></img>
      </div>
      <div className="point">
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