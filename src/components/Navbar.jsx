import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import "../App.css"
import logo from "/logo.png"

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <nav>
        <div className="left">
            <IoIosMenu className='icon-large'/>
            <img src={logo} alt="" />
        </div>
        <div className="right">
            <CiSearch className='icon-large'/>
            <CiGrid41 className='icon-large'/>
            <button onClick={() => dispatch(toggleTheme())}>{darkMode?<CiDark className='icon-large'/>:<CiLight className='icon-large'/>}</button>
            
        </div>
    </nav>
  )
}

export default Navbar