import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from '../../../utils/common';
import { FaAnglesLeft } from 'react-icons/fa6';
import { FaAnglesRight } from 'react-icons/fa6';
import { reducerCases } from '../../../utils/Constants';
import { useStateProvider } from '../../../utils/StateProvider';
import 'swiper/css';
import './Slider.css';

import axios from 'axios';

const Slider = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id, images }) => {
        return { name, id, images };
      });

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <div className="slider-container">
      <div className="headings">
        <span className="">Playlists</span>
      </div>
      <div className="swiper-container">
        <Swiper {...sliderSettings}>
          {playlists.map(({ name, id, images }) => (
            <SwiperSlide key={id} onClick={() => changeCurrentPlaylist(id)}>
              <div className="carousel">
                <img src={images[0].url} alt="home" />
                <span className="name">{name}</span>
              </div>
            </SwiperSlide>
          ))}

          <div className="btn-con">
            <SliderButtons />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="buttons">
      <button onClick={() => swiper.slidePrev()}>
        <FaAnglesLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaAnglesRight />
      </button>
    </div>
  );
};
