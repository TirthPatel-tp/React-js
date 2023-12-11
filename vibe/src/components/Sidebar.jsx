import React from 'react'
import styled from "styled-components";
import logo from '../img/logo_white.png'
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch } from 'react-icons/md'
import Playlists from './Playlists';

function Sidebar() {
    return (
        <Container>
            <div className="top_links">
                <div className="logo">
                    <img src={logo} alt='Logo' />
                </div>
                <ul>
                    <li>
                        <span>
                            <MdHomeFilled />
                            Home
                        </span>
                    </li>
                    <li>
                        <span>
                            <MdSearch />
                            Search
                        </span>
                    </li>S
                    <li>
                        <span>
                            <IoLibrary />
                            Your Library
                        </span>
                    </li>
                </ul>
            </div>
            <Playlists/>
        </Container>
    )
}

const Container = styled.div`
background-color: black;
color: #b3b3b3;
display: flex;
flex-direction: column;
height:100%;
width:100%;
.top_links{
    display:flex;
    flex-direction: column;
}
.logo{
    text-align: center;
    margin: 1rem 0;
    img{
        max-inline-size:100%;
        block-size:auto;
        margin-top: -4rem;
    }
}
ul{
    margin-top: -3rem;
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap: 1rem;
    padding: 1rem;
    li{
        display: flex;
        gap:1rem ;
        cursor: pointer;
        transition:0.3s ease-in-out;
        &:hover{
            color: white;
        }
    }
}
`

export default Sidebar