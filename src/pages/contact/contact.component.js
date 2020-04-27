import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
                    zoom={16}
                    initialCenter={{ lat: 47.0755495, lng: 21.9286541 }}
                    >
                        <Marker position={{ lat: 47.0755495, lng: 21.9286541 }} />
                    </Map>
            </div>
            <div className='contact-info'>
                <p><span><b>Addresa:</b> </span>Bulevardul Ștefan cel Mare 54, Oradea</p>
                <p><span><b>Telefon:</b> </span>0740 290 433</p>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDmKtCd1Ad3rsSdL0EJUGVn1W0ZaE39__0'
  })(ContactPage);
  