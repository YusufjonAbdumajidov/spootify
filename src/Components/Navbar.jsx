import React, { useState, useEffect } from 'react';
import { BsHeadphones } from 'react-icons/bs';
import { BiSearchAlt2, BiBarChartSquare } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import avatarImage from "../images/avatar.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"

// Make an API call here to the server to get the data

const Navbar = () => {
  // console.log(allData);



  



  return (
    <div className="navbar">
        <header>
              <img src={avatarImage} alt="Avatar" />
              <p>Bob Smith</p>
        </header>
        <nav>
            <ul>
                <Link to={{pathname: "/"}}>
                <li> <BsHeadphones className='icon' /> Discover</li>
                </Link>

                <Link to="/Search">
                <li><BiSearchAlt2 className='icon' />Search</li>
                </Link>

                <Link to="/Favourites">
                <li><AiFillHeart className='icon' />Favourites</li>
                </Link>

                <Link to="/Playlist">
                <li><MdPlaylistAdd className='icon' /> Playlist</li>
                </Link>

                <Link to="/Charts">
                <li>< BiBarChartSquare className='icon' /> Charts</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar