import React from 'react'
import '../Obtrusive/Obtrusive.css'

function Obtrusive() {
  return (
    <div>
        <h1 className="char">PLAYER NAME</h1>
        {/* <p className='obtrusive'>OBTRUSIVE</p> */}
        {/* <p className='obtrusive'>CHARACTER NAME</p> */}
        <button className='btnHide'>CLICK</button>
        <div className="pic3">
        <img className="pic3" src="./assets/pic3.png"></img>
      </div>
    </div>
  )
}

export default Obtrusive