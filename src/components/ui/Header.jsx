import React from 'react'
import logo from '../../assets/images/logoup.jpg'
import vklink from '../../assets/images/vk-logo.png'
import {Link} from 'react-router-dom'
import { Context } from '../../index'
import { useRef, useState, useEffect, useContext } from 'react'

function Header() {  
  const {user} = useContext(Context)

  return (
    <div className="header">
    <div className="imgBlock">
      <img src={logo} alt="logo" />
    </div>
    <div className="rightHeader">
      <div className="linkBlock">
        <div className="socMediaIcons">
          <div className="socIcon">
            <img src={vklink} alt="vk-link" />
          </div>
        </div>
        <div className="textBlocks">
          <div className="textBlock">
            Связь с нами:
          </div>
          <div className="textBlock">
            +7(965)-910-92-62
          </div>
        </div>
        
      </div>
      <div className="lowerHeader">
        <div className="nav">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/about">О нас</Link></li>
            {user._isAuth ? 
            <li><Link to="/admin">А-П</Link></li>
            : ''}
          </ul>
        </div>
      </div>
    </div>
      
    
  </div>
  );
}

export default Header;
