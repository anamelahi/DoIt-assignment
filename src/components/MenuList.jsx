import React from 'react'
import "../App.css"
import { useSelector } from 'react-redux';

const MenuList = (props) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
    <div>
        <div className="menuList">
        {props.icons}
        <p>{props.text}</p>
        </div>
    </div>
    </>

  )
}

export default MenuList