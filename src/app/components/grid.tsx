import { type } from "os";
import React from "react";

async function getPokemon(pokeint: number): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeint}`);
    const pokemon = await res.json();
    console.log(pokemon.name);
    return pokemon.name;
}
  
  async function getTypes(typeInt: number): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${typeInt}`);
    const type = await res.json();
    return type.name.toUpperCase();
}
  
async function generateTypes() {
    let types_row: number[] = [];
    let types_col: number[] = [];
    while(types_row.length < 3 || types_col.length < 3) {
      let num = Math.floor(Math.random() * 18)+1;
      if(!types_row.includes(num) && !types_col.includes(num)) {
        types_row.push(num);
      }
      num = Math.floor(Math.random() * 18)+1;
      if(!types_row.includes(num) && !types_col.includes(num)) {
        types_col.push(num);
        }
    }
    return [types_row, types_col]
}

async function checkTypeCombinations(types: number[]) {
    /**
     * Checks if any of the type combinations are invalid (i.e. no pokemon have that type combo)
     */
    let invalid = false;

}

function getColor(type: number){
    switch(type){
        case 1:
            return '#aa9';
        case 2:
            return '#b54';
        case 3:
            return '#89f';
        case 4:
            return '#a59';
        case 5:
            return '#db5';
        case 6:
            return '#ba6';
        case 7:
            return '#ab2';
        case 8:
            return '#66b';
        case 9:
            return '#aab';
        case 10:
            return '#f42';
        case 11:
            return '#39f';
        case 12:
            return '#7c5';
        case 13:
            return '#fc3';
        case 14:
            return '#f59';
        case 15:
            return '#6cf';
        case 16:
            return '#76e';
        case 17:
            return '#754';
        case 18:
            return '#e9e';
    }
}

const TypeGrid = ({ type }: { type: number }): JSX.Element => {
    const color = getColor(type);
    return (
            <div style={{ backgroundColor: color }} className="flex w-20 h-10 shadow-md rounded-md justify-center items-center text-white font-bold">
                {getTypes(type)}
            </div>
    );
}

const PokemonGrid = (): JSX.Element => {
    return (
        <div className="flex w-32 h-32 justify-center items-center text-black font-bold">
        </div>
    );
}

export default async function Grid(): Promise<JSX.Element> {
    const pokemon = await getPokemon(467);
    const types = await generateTypes();
    const types_row = types[0];
    const types_col = types[1];
  
    return (
    <div className="grid grid-cols-5 grid-rows-4 items-center justify-center w-fit h-fit">
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><img
                src="https://wiki.cobblemon.com/images/6/65/Moon_Ball_%28model%29.png"
                width={60}
                height={60}
                alt="Masterball"
              /></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><TypeGrid type={types_col[0]}/> </div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><TypeGrid type={types_col[1]}/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><TypeGrid type={types_col[2]}/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><TypeGrid type={types_row[0]} /></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-tl-md border-r border-b hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white border-b hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-tr-md border-l border-b hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200">t</div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><TypeGrid type={types_row[1]} /></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white border-r hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white border-l hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200">t</div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200"><TypeGrid type={types_row[2]} /></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-bl-md border-r border-t hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white border-t hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-br-md border-l border-t hover:bg-gray-100 duration-150"><PokemonGrid/></div>
        <div className="w-32 h-32 flex items-center justify-center bg-gray-200">t</div>
    </div>
    );
  }
