import React from 'react';

import {AiFillQuestionCircle} from 'react-icons/ai';

function Navbar() {
  return (
    <div className="top-0 left-0 h-20 w-screen flex items-center justify-between">
      <a href='tanner.moe/pokedoku'>
        <div className="ml-10 flex items-center">
          <img src="https://wiki.cobblemon.com/images/6/65/Moon_Ball_%28model%29.png" width={60} height={60} alt="Masterball" />
          <h1 className="ml-3 text-2xl font-bold">Infinite PokéDoku</h1>
        </div>
      </a>
      <div className="right-0 flex items-center justify-center">
      <button className="w-10 h-10 mr-10 bg-gray-100 flex items-center justify-center rounded-full hover:bg-gray-200 duration-150">
          <div className="flex items-center justify-center">
            <AiFillQuestionCircle className="text-xl" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;