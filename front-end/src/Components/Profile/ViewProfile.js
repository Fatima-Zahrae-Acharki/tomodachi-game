import React, { useEffect, useState } from "react";
import "../Profile/ViewProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ViewProfile() {


  const [players , setPlayers]=useState([])
  const [user , setuser] = useState({})
  const [formvalue , setformvalue] = useState({
    name:""
  })

  const getPlayers=async()=>{
    const res = await axios.get("http://127.0.0.1:8000/api/show")
    setPlayers(res.data)
    console.log(players)
  };
  const filterplay = players[players.length -1]

  const handlechange=(e)=>{
    const value = e.target.value
    setformvalue({...formvalue,name:value})
  }
  useEffect(()=>{
    setuser(players[players.length -1])
    setformvalue({...formvalue,name:filterplay ? filterplay.playerName :""})
  },[players])



  
  useEffect(()=>{
    getPlayers()

  },[])

  console.log(formvalue)



  const updatePlayers=async(e, id)=>{
    e.preventDefault();
    console.log(formvalue)
    const res = await axios.post(`http://127.0.0.1:8000/api/update/${id}`,formvalue)
    setPlayers(res.data)
    window.location.reload(true)
  };

  useEffect(()=>{
    getPlayers()
  },[])

  return (
    <form className="all1">
      <div className="profileComp">
        <p id="profile">PROFILE</p>
        <img id="avatar1" alt="" src="../assets/user1.png"></img>
        <text id="player-name">Player name</text>
        <text id="level1">Level: </text>
        <div className="rectangle-div"></div>
        <Link to="/OnlineOffline">
        <button id="back1">BACK</button>
        </Link>
      </div>
      <div className="items2">
        <img id="frame6" src="../assets/frame6.png" />
        <input type="text" placeholder="Change name" id="changeName" 
            name="name" onChange={handlechange} value={formvalue.name}/>
        <button id="changeBtn" type="submit"
        key={players.id} onClick={(e)=> updatePlayers(e,user.id)}
        >CHANGE</button>
        <p id="or">OR</p>
        <button id="removeAccount">REMOVE ACCOUNT</button>
      </div>
    </form>
  );
}

export default ViewProfile;
