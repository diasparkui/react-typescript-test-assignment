import React from 'react'
import LogoImg from "../../assets/images/logo.svg"
import "./index.scss";
const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src={LogoImg} alt="logo-image" title='logo-image' />
      </div>
    </div>
  )
}

export default Header;