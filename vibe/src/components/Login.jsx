import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

const Login = () =>  {

  const handleClick = () => {
    const clientId = "e0b1df6f8d9e434fb792236daeba6ac7";
    const rediectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = ["user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-state",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played"];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${rediectUrl}&scope=${scope.join(" ")}&response_type=token&show_dailog=true`;
  };

  return <Container>
    <img src={logo} alt='Logo' />
    <button onClick={handleClick}>Connect vibe</button>
  </Container>
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
height: 100vh;
width:100vw;
background-color: pink;
gap: 1rem;
img {
    height:40vh;
}
button{
    padding:1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: pink;
    font-size: 1.4rem;
    cursor: pointer;
    text-align: center;
}
`;

export default Login;