import React from "react";
import "../JoinGame/Join.css";


function Join() {
  return (
    <div>
        <div className="div11">
          <img id="pprofile" src="./assets/user1.png"></img>
          <p id="name2">Name: </p>
          <p id="lvl2">lvl: </p>
          <p id="exp2">exp: </p>
        </div>
        <div className="div22">
          <p id="crowns">crowns: </p>
          <img id="crownn" src="./assets/crown.png"></img>
          <p id="onigiris">onigiris: </p>
          <img id="onigirii" src="./assets/onigiri.png"></img>
        </div>
        <div className="div33">
          <div id="first">
            <img id="frame1" src="./assets/frame2.png"></img>
            <img id="pen" src="./assets/pen.png"></img>
            <p id="make">MAKE GAME</p>
          </div>
          <div id="second">
            <img id="frame2" src="./assets/frame1.png"></img>
            <img id="join" src="./assets/join.png"></img>
            <p id="Join">JOIN </p>
          </div>
          <div id="third">
            <img id="frame3" src="./assets/frame2.png"></img>
            <img id="searching" src="./assets/searching.png"></img>
            <p id="Find">FIND</p>
          </div>
        </div>
        <div id="butn">
          <button id="butn1">BACK</button>
        </div>
    </div>
  )
}

export default Join;