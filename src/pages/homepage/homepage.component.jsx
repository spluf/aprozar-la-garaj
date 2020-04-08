import React from 'react'; 
import Particles from 'react-particles-js';
import particleParams from './particleParams.json'

import './homepage.styles.scss'

const HomePage = () => {
    return(
      <div>
        <Particles className='particles'
                  params={particleParams} />
        <header>
          <h1>Aprozar la garaj</h1>
          <h2>Iti aducem prospetime pe masa!</h2>
        </header>
      </div>
    )
  }

  export default HomePage;