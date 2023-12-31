import React, { useEffect } from 'react';
import './CurrentTrack.css';
import axios from 'axios';
import { useStateProvider } from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';
export default function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.data !== '') {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <div className='currenttrack_container'>
      {currentPlaying && (
        <div className="track">
          <div className="track_image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track_info">
            <h4 className="track_info track_name">{currentPlaying.name}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
