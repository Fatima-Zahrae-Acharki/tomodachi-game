import React, { useState } from "react";
import "../AddPlayer/AddPlayer.css";
import { Link } from "react-router-dom";

function AddPlayer() {
    const [info2, setInfo] = useState({
      PlayerName: "",
      ObtrusivePlayer: "",
    });
    const handleChange2 = (e) => {
      const { name, value } = e.target;
      setInfo({ ...info2, [name]: value });
    };
    const handlesubmit2 = async () => {
      console.log(info2);
      console.log("added");
      // const res = await axios.post("/api/AddPlayer", info);
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
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
          <text id="pname">Player Name</text>
        </div>
        <div className="piiic">
          <img src="../assets/pic9.png" id="pic9"></img>
        </div>
      </div>
      <div className="AddForm">
        <div className="formgroup">
          <input type="text" placeholder="Add Player" id="adddPlayer" name="PlayerName" onChange={handleChange2}></input>
          <input type="number" placeholder="Obtrusive" id="oobtrusive" name="ObtrusivePlayer" onChange={handleChange2}></input>
        </div>
        <div className="buuuttons">
          <button id="addd">ADD+</button>
          <Link to="/Obtrusive">
          <button id="playy" onClick={handlesubmit2}>PLAY</button>
          </Link>
        </div>
        <Link to="/OnlineOffline" id="link">
          <button id="backk">BACK</button>
          </Link>
      </div>
    </div>
  );
}

export default AddPlayer;
