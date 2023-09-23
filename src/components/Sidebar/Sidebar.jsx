import React from 'react';
import './Sidebar.css';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import { IoLibrary } from 'react-icons/io5';
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_contents">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
