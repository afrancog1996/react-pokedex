import { useState } from 'react';
import './App.css';
import {
  setAbilities, setNext, setOneRandom, setPrevious
} from './functions';
import Modal from './modal';

const App = () => {

  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const [SHOW_POKE, SET_SHOWPOKE] = useState([]);
  const [open, setOpen] = useState(false);
  const [CURRENT_ID, SET_CURRENT_ID] = useState(0);
  const [MESSAGE, SET_MESSAGE] = useState({
    msg: '',
    action: false,
  });


  return (
    <div className="App">
      <div className='container'>
        {MESSAGE.action && <h1>{MESSAGE.msg}</h1>}
        <a href='https://github.com/afrancog1996/react-pokedex' className='link'>GITHUB</a>
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
          <button className='btn' onClick={() => setOneRandom(SET_SHOWPOKE, SET_CURRENT_ID, SET_MESSAGE, URL)}>
            Random
          </button>
          <button className='btn' onClick={() => setPrevious(SET_SHOWPOKE, CURRENT_ID, SET_CURRENT_ID, SET_MESSAGE, URL)}>
            Previous
          </button>
          <button className='btn' onClick={
            () => setNext(SET_SHOWPOKE, CURRENT_ID, SET_CURRENT_ID, SET_MESSAGE, URL)}>
            Next
          </button>
        </div>
      </div>
      {open && <Modal setOpen={setOpen} data={setAbilities(SHOW_POKE)} />}
    </div>
  );
}

export default App;