import React, { useState } from 'react'
import '../Obtrusive/Obtrusive.css'
import { Link } from 'react-router-dom';

function Obtrusive() {

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  return (
    <div>
        <h1 className="char">PLAYER NAME</h1>
        {/* <p className='obtrusive'>OBTRUSIVE</p> */}
        {/* <p className='obtrusive'>CHARACTER NAME</p> */}
        {/* <button className='btnHide'>CLICK</button> */}
        <Link to="/Game">
        {showButton && <button onClick={toggleButton} className='btnHide' >CLICK</button>}</Link>
        <div className="pic3">
        <img className="pic3" src="./assets/pic3.png"></img>
      </div>
    </div>
  )
}

export default Obtrusive