import React from 'react'
import "../App.css"


const MenuList = (props) => {
  return (
    <div>
        <div className="menuList">
        {props.icons}
        <p>{props.text}</p>
        </div>
    </div>
  )
}

export default MenuList