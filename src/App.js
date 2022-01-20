import logo from './logo.svg';
import './App.css';
import Modal from './modal';
import {
  setOneRandom,
  setNext,
  setPrevious,
  setAbilities
} from './functions';
import { useEffect, useState } from 'react';

const App = () => {

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=600";
  const [POKEMONS, SET_POKEMONS] = useState([]);
  const [SHOW_POKE, SET_SHOWPOKE] = useState([]);
  const [open, setOpen] = useState(false);
  const [CURRENT_ID, SET_CURRENT_ID] = useState(0);

  useEffect(
    () => {
      const POKE_LIST = async () => {
        const RES = await fetch(URL);
        const DAT =  await RES.json();
        SET_POKEMONS(DAT.results);
      }
      POKE_LIST();
    }, []
  )

  return (
    <div className="App">
      <div className='Container-pokemons'>
        <h1 className='Title'>ID: {CURRENT_ID}</h1>
        <h1 className='Title'>NAME: {SHOW_POKE?.name}</h1>
        <div className='poke-1'>
          <img src={SHOW_POKE?.sprites?.back_default}></img>
        </div>
        <div className='poke-2'>
          <img src={SHOW_POKE?.sprites?.front_default}></img>
        </div>
      </div>
      <div className='Container-button'>
        <button className='btn' onClick={() => setOpen(true)}>
          Open abilities
        </button>
        <button className='btn' onClick={() => setOneRandom(POKEMONS, SET_SHOWPOKE, SET_CURRENT_ID)}>
          Random
        </button>
        <button className='btn' onClick={() => setPrevious(POKEMONS, SET_SHOWPOKE, SET_CURRENT_ID)}>
          Previous
        </button>
        <button className='btn' onClick={() => setNext(POKEMONS, SET_SHOWPOKE, SET_CURRENT_ID)}>
          Next
        </button>
      </div>
      {open && <Modal setOpen={setOpen} data={setAbilities(CURRENT_ID, POKEMONS)} />}
    </div>
  );
}

export default App;