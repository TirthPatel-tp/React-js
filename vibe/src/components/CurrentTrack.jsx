import React,{useEffect} from 'react'
import  styled from "styled-components";
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';
import axios from 'axios';


function CurrentTrack() {
  const [{ token,currentPlaying }, dispatch] = useStateProvider(); // Bringing token from the provider
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
  if(response.data !== ""){
    const {item} = response.data;
    const currentPlaying ={
      id: item.id,
      name: item.name,
      artists: item.artists.map((artist)=> artist.name),
      image: item.album.images[2].url,
    };

    dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
  }
    };
    getCurrentTrack();
  }, [token, dispatch]);


  return <Container>
    {
      currentPlaying&& (
        <div className="track">
          <div className="track_image">
            <img src={currentPlaying.image} alt="currentPlayling"/>
          </div>
          <div className="track_info">
            <h4>{currentPlaying.name}</h4>
            <h6>{currentPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )
    }
    </Container>
  
}


const Container = styled.div`
.track{
  display:flex;
  align-items: center;
  gap: 1rem;
  &_info{
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    h4{
      color: white;
    }
    h6{
      color:#b3b3b3;
    }
  }

}
/* background-color: #181818;
height: 100% ;
width: 100%;
border-top: 1px solid #282828;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
justify-content: center;
padding: 0 1rem; */


`
export default CurrentTrack