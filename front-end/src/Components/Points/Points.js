import React, { useEffect, useState } from "react";
import '../Points/Points.css'
import axios from "axios";
import { Link } from "react-router-dom";

function Points() {


  const [players , setPlayers]=useState([])

  const getPlayers=async()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/show")
    setPlayers(res.data)
    console.log(players)
  };

  useEffect(()=>{
    getPlayers()
  },[])
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
        {players ? players.map(player =>(<text id="pname" >{player.playerName} </text> )):"no player found"} 
        </div>
      </div>
      <div>
        <Link to="/OnlineOffline">
        <img id="pic8" src='../assets/pic8.png'></img></Link>
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