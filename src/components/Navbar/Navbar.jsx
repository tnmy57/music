import React from 'react';
import './Navbar.css';
import { useStateProvider } from '../../utils/StateProvider';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
const Navbar = () => {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className="navbar_container" >
      <div className="profile_pic">
        <a href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
    </div>
  );
};

export default Navbar;
