import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './contact.styles.scss';

const ContactPage = ({google}) => {
    const mapStyles = {
        width: '100%',
        height: '60%',
        margin: 'auto 0 auto',
        zIndex: '1'
      };
      
    return (
        <div className='main contact-page'>
            <div className='map'>
                <Map 
                    style={mapStyles}
                    google={google}
                    zoom={8}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />
            </div>
            <div class='contact-info'>
                Contact info
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDmKtCd1Ad3rsSdL0EJUGVn1W0ZaE39__0'
  })(ContactPage);
  