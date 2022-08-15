import React from 'react'

export default function Hero() {
  return (
    <div id="home">
      <div className="w-full h-3/4">
        <div className="w-full h-full">
          <img src="./public/img/sanFrancisco.jpg" alt="imagen"></img>
        </div>
        <div className="w-full h-full flex flex-col absolute">
          <input type="search" className='outline outline-1 outline-black'/>
          <button>Explorar</button>
        </div>
      </div>
    </div>
  );
}
