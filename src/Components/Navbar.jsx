import React from 'react';
import { BsHeadphones } from 'react-icons/bs';
import { BiSearchAlt2, BiBarChartSquare } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import avatarImage from "../images/avatar.svg";

const Navbar = () => {
  return (
    <div className="navbar">
        <header>
              <img src={avatarImage} alt="Avatar" />
              <p>Bob Smith</p>
        </header>
        <nav>
            <ul>
                <li><a href="/"> <BsHeadphones className='icon' /> Discover</a></li>
                <li><a href="/"><BiSearchAlt2 className='icon' />Search</a></li>
                <li><a href="/"><AiFillHeart className='icon' />Favourites</a></li>
                <li><a href="/"><MdPlaylistAdd className='icon' /> Playlist</a></li>
                <li><a href="/">< BiBarChartSquare className='icon' /> Charts</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar