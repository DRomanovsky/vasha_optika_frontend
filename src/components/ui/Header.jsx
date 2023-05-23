import React from 'react'
import logo from '../../assets/images/logoup.jpg'
import vklink from '../../assets/images/vk-logo.png'
import {Link} from 'react-router-dom'
import { Context } from '../../index'
import { useRef, useState, useEffect, useContext } from 'react'

function Header() {  
  const {user} = useContext(Context)

  return (
    <div class="header">
    <div class="imgBlock">
      <img src={logo} alt="logo" />
    </div>
    <div class="rightHeader">
      <div class="linkBlock">
        <div class="socMediaIcons">
          <div class="socIcon">
            <img src={vklink} alt="vk-link" />
          </div>
        </div>
        <div class="textBlocks">
          <div class="textBlock">
            Связь с нами:
          </div>
          <div class="textBlock">
            +7(XXX)-XXX-XX-XX
          </div>
        </div>
        
      </div>
      <div class="lowerHeader">
        <div class="nav">
          <ul>
            <li><Link to="/"><a>Главная</a></Link></li>
            <li><Link to="/catalog"><a>Каталог</a></Link></li>
            <li><Link to="/services"><a>Услуги</a></Link></li>
            <li><Link to="/contacts"><a>Контакты</a></Link></li>
            <li><Link to="/about"><a>О нас</a></Link></li>
            {user._isAuth ? 
            <li><Link to="/admin"><a>А-П</a></Link></li>
            : ''}
          </ul>
        </div>
      </div>
    </div>
      
    
  </div>
  );
}

export default Header;
