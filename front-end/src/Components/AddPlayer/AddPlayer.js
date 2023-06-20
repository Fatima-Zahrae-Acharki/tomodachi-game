import React, { useEffect, useState } from "react";
import "../AddPlayer/AddPlayer.css";
import { Link } from "react-router-dom";
import axios from "axios";

function AddPlayer() {
  const [input, setInput] = useState({
    playerName: "",
    // ObtrusivePlayer: "",
  });

  const handleInputChange = async (e) => {
    console.log(e.target);
    setInput({ ...input, playerName: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log(input);
    const res = await axios.post("http://127.0.0.1:8000/api/addPlayer", input);
    console.log(res.data);
  };


  const [players , setPlayers]=useState([])

  const getPlayers=async()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/show")
    setPlayers(res.data)
    console.log(players)
  };

  useEffect(()=>{
    getPlayers()
  },[])



  


  const deletePlayer = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const res = await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);
    console.log(res.data);
    getPlayers()
  };


 
  return (
    <div>
      <div className="PlayerAdded">
        <div id="playeraddedpic">
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
          <img id="proofile" src="../assets/user1.png"></img>
        </div>
        <div id="pnamediv">
        {players ? players.map(player =>(<text id="pname" >{player.playerName} <button id="deletebtn1" type="submit" key={player.id} onClick={(e)=> deletePlayer(e,player.id)}>X</button></text> )):"no player found"} 
    
        </div>
        <div className="piiic">
          <img src="../assets/pic9.png" id="pic9"></img>
        </div>
      </div>
      <form onSubmit={handleSubmit2}>
        <div className="AddForm">
          <div className="formgroup">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Add Player"
              id="adddPlayer"
              name="PlayerName"
              // onChange={handleChange2}
            ></input>
            {/* <input type="number" placeholder="Obtrusive" id="oobtrusive" name="ObtrusivePlayer" onChange={handleChange2}></input> */}
          </div>
          <div className="buuuttons">
            <button id="addd" type="submit">
              ADD+
            </button>
            <Link to="/Obtrusive">
              <button id="playy">PLAY</button>
            </Link>
          </div>
          <Link to="/OnlineOffline" id="link">
            <button id="backk">BACK</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddPlayer;
