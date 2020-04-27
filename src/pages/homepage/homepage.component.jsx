import React from 'react'; 
import Particles from 'react-particles-js';
import particleParams from './particleParams.json';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const HomePage = () => {
    return(
      <div>
        <Particles className='particles'
                  params={particleParams} />
        <header>
          <Link className="navigation-link" to='/aprozar-la-garaj/products'>
            <h1>Aprozar la garaj</h1>
            <h2>Iti aducem prospetime pe masa!</h2>
          </Link>
        </header>
      </div>
    )
  }

  export default HomePage;