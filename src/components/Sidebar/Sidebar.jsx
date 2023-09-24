import React from 'react';
import './Sidebar.css';
import { BiHomeAlt } from 'react-icons/bi';
import { CgBrowse } from 'react-icons/cg';
import { CgAlbum } from 'react-icons/cg';
import { GrUserManager } from 'react-icons/gr';
import { BiVideo } from 'react-icons/bi';
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_contents">
        <div className="logo">
          <h1>MUSIC</h1>
        </div>
        <div className="sidebar">
          <div className="sid-ele current">
            <BiHomeAlt />
            <p>Home</p>
          </div>
          <div className="sid-ele">
            <CgBrowse />
            <p>Browse</p>
          </div>
          <div className="sid-ele">
            <CgAlbum />
            <p>Album</p>
          </div>
          <div className="sid-ele">
            <GrUserManager />
            <p>Artist</p>
          </div>
          <div className="sid-ele">
            <BiVideo />
            <p>Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
