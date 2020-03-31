import React from 'react';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';

import particleParams from './particleParams.json'

import './App.css';

function App() {
  return (
    <div className="App">
      <Particles className='particles'
                params={particleParams} />
      <header className="App-header">
        <h1>Aprozar la garaj</h1>
        <h2>Iti aducem prospetime acasa in fiecare zi!</h2>
      </header>
      <div className="flex-grid">
        <div className="col1">
          <ul className="category-list">
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Fructe</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Legume</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Cereale</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Alune</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Nuci</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Seminte</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Condimente</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Sucuri</a></li>
              <li><a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">Muraturi</a></li>

            </ul>
        </div>
        <div className="col2">
          <div className="dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img alt="leguma" src="http://localhost:3001/static/media/home.657bfcef.jpeg" />
            <div>
              <h3>Leguma</h3>
              <p>Pret: 10Ron</p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img alt="leguma" src="http://localhost:3001/static/media/home.657bfcef.jpeg" />
            <div>
              <h3>Leguma</h3>
              <p>Pret: 10Ron</p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img alt="leguma" src="http://localhost:3001/static/media/home.657bfcef.jpeg" />
            <div>
              <h3>Leguma</h3>
              <p>Pret: 10Ron</p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img alt="leguma" src="http://localhost:3001/static/media/home.657bfcef.jpeg" />
            <div>
              <h3>Leguma</h3>
              <p>Pret: 10Ron</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
