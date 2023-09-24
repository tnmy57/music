import React from 'react';
import './Footer.css';
import CurrentTrack from './CurrentTrack/CurrentTrack';
import Controls from './Controls/Controls';
import Volume from './Volume/Volume';
const Footer = () => {
  return <div className="footer_container">
    <CurrentTrack/>
    <Controls/>
    <Volume/>
  </div>;
};

export default Footer;
