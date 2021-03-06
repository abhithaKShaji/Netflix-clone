import React from 'react'
import "./NavBar.css";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <ul>
        <li className='home'><a href="#home">Home</a></li>
        <li><a href="#tv shows">Tv Shows</a></li>
        <li><a href="#series">Series</a></li>
        <li className='m'><a href="#movies">Movies</a></li>
        <li><a href="#latest">Latest</a></li>
      </ul>
      <Link to='/'><img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" /></Link>
    </div>
  )
}

export default NavBar
