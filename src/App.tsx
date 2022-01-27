import {
  HeartFillIcon
} from '@primer/octicons-react';
import React, { useRef, useState } from 'react';
import './App.css';
import Img from './components/img-component/img-component';
import Modal from './components/modal-component/modal-component';
import { getNext, getPrevius, getRandom, searchByName } from './services/functions';

function App() {

  const [data, setData]: any = useState([]);
  const [open, setOpen]: any = useState(false);
  const side_front = 1;
  const side_back = 2;
  let input = useRef<any>(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Made with <HeartFillIcon size='medium' aria-label='heard' fill='#ff0000' /> by aFrancog
        </h1>
        <a className='App-link' target='_blank' rel='noreferrer' href="https://github.com/afrancog1996/react-pokedex.git">GITHUB</a>
      </header>
      <main className='Main'>
        <div className='ctl-search'>
          <input className='input' ref={input} type="text" placeholder='Pokemon name: ' />
          <button className='btn-input' onClick={() => { searchByName(input, setData) }}>Search</button>
        </div>
        <div className='ctl-images'>
          <div className='img'>
            <Img data={data} side={side_back} />
          </div>
          <div className='img'>
            <Img data={data} side={side_front} />
          </div>
        </div>
        <div className='ctl-details'>
          <h2>{data?.name !== undefined && 'Name: ' + data?.name}</h2>
          <h2>{data?.id !== undefined && 'Id: ' + data?.id}</h2>
        </div>
        <div className='ctl-buttons'>
          <div>
            <button className='btn' onClick={() => { getRandom(setData) }} >Random</button>
          </div>
          <div>
            <button className='btn' onClick={() => { getPrevius(data, setData) }}>Previus</button>
          </div>
          <div>
            <button className='btn' onClick={() => { getNext(data, setData) }}>Next</button>
          </div>
          <div>
            <button className='btn' onClick={() => { setOpen(true) }}>View abilities</button>
          </div>
        </div>
      </main>
      {open && <Modal setOpen={setOpen} data={data} />}
    </div>
  );
}

export default App;
