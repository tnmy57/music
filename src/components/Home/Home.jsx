import React, { useEffect } from 'react'
import "./Home.css"
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import axios from "axios"
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';

const Home = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);
  return (<div className='home_container'>
      <div className="home_body">
        <Sidebar/>
        <div className="body" >
          <Navbar/>
          <div className="body_contents">
            <Body/>
          </div>
        </div>
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home