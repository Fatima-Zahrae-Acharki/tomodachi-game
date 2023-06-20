import React, { useEffect, useState } from "react";
import "../Game/Game.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Game() {


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
    <div className="container11">
      {/* <div className="Players1">
        <div className="profile33">
          <img id="profile331" src="../assets/user1.png"></img>
          <img id="profile332" src="../assets/user1.png"></img>
          <img id="profile333" src="../assets/user1.png"></img>
          <img id="profile334" src="../assets/user1.png"></img>
          <img id="profile335" src="../assets/user1.png"></img>
        </div>
        <div className="playerNameee2" 
                    style={{
                      position: "absolute",
                      top: "90px",
                      // left: "30px",
                      wordSpacing: "80px",
                  }}
                  >
          {players ? players.map(player =>(<text id="playerNameee31">{player.playerName}</text>)):"no player found"} 
          
        </div>
      </div> */}

<div id="playeraddedpic111">
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
          <img id="proofile111" src="../assets/user1.png"></img>
        </div>
        <div id="pnamediv111">
        {players ? players.map(player =>(<text id="pname" >{player.playerName} <button id="deletebtn1" type="submit">X</button></text> )):"no player found"} 
    
        </div>

      <div>
        <div className="ground">
          <div className="spinner">
            {/* <div id="chart"></div>
    
            <script src="../spinner.js" charset="utf-8"></script> */}
          </div>
          <div id="bacgroound">
            <img id="backgroundd" src="../assets/frame2.png"></img>
            <div id="questions">
              <input id="queestions" placeholder="Questions"></input>
            </div>
            <div id="buttonssss">
              <button id="yes">YES</button>
              <button id="skip">SKIP</button>
              <button id="no">NO</button>
            </div>
          </div>
        </div>
        <div className="vote">
          <Link to="/Vote">
          <button id="vote">VOTE</button>
          </Link>
        </div>
      </div>

      {/* <div className="Players2">
        <div className="profile44">
          <img id="profile441" src="../assets/user1.png"></img>
          <img id="profile442" src="../assets/user1.png"></img>
          <img id="profile443" src="../assets/user1.png"></img>
          <img id="profile444" src="../assets/user1.png"></img>
          <img id="profile445" src="../assets/user1.png"></img>
        </div>
        <div className="playerNameee3"
        style={{
          marginTop: "90px",
        alignItems: "center",
        justifyContent: "center",
        wordSpacing: "30px",
      }}>
        {players ? players.map(player =>(<text id="playerNameee31"> {player.playerName} </text>)):"no player found"} 
        </div>
      </div> */}
    </div>
  );
}

export default Game;
