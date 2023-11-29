import React from 'react'
import styled from "styled-components";
import logo from '../img/logo_white.png'
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch } from 'react-icons/md'

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
                    </li>
                    <li>
                        <span>
                            <IoLibrary />
                            Your Library
                        </span>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
background-color: black;
color:#b3b3b3;
display: flex;
flex-direction: column;
height:100%;
width:100%;

`

export default Sidebar