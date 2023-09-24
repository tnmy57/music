import axios from 'axios';
import React from 'react';
import './Volume.css';
import { useStateProvider } from '../../../utils/StateProvider';

export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      'https://api.spotify.com/v1/me/player/volume',
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
  };
  return (
    <div className="volume_container">
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </div>
  );
}
