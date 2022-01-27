import {
  HeartFillIcon
} from '@primer/octicons-react';
import React, { useState } from 'react';
import './App.css';
import Img from './components/img-component/img-component';

function App() {


  const [data, setData] = useState([]);




  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Make with <HeartFillIcon size='medium' aria-label='heard' fill='#ff0000' /> by aFrancog
        </h1>
        <a className='App-link' target='_blank' href="https://github.com/afrancog1996/react-pokedex.git">GITHUB</a>
      </header>
      <main className='Main'>
        <div className='ctl-search'>
            <input  className='input' type="text" placeholder='Pokemon name: ' />
            <button className='btn-input'>Search</button>
        </div>
        <div className='ctl-images'>
          <div className='img'>
            <Img />
          </div>
          <div className='img'>
            <Img />
          </div>
        </div>
        <div className='ctl-buttons'>
          <div>
            <button className='btn'>Random</button>
          </div>
          <div>
            <button className='btn'>Previus</button>
          </div>
          <div>
            <button className='btn'>Next</button>
          </div>
          <div>
            <button className='btn'>View abilities</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
