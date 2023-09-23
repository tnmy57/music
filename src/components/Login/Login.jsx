import React from 'react';
import './Login.css';

const Login = () => {
  const handleClick = () => {
    const clientId = 'b22b178cbfef44cca1dc727edca4c556';
    const redirectUrl = 'http://localhost:3000/';
    const apiUrl = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-private',
      'user-read-email',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-top-read',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login_container">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect To Spotify Clone</button>
    </div>
  );
};

export default Login;
