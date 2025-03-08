import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import "../App.css"
import logo from "/logo.png"

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <IoIosMenu className='icon-large'/>
            <img src={logo} alt="" />
        </div>
        <div className="right">
            <CiSearch className='icon-large'/>
            <CiGrid41 className='icon-large'/>
            <CiDark className='icon-large'/>
        </div>
    </nav>
  )
}

export default Navbar