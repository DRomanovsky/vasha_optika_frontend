import React from 'react'
import logo from '../../assets/images/logoup.jpg'
import vklink from '../../assets/images/vk-logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div class="footer">
    <div class="upperFooter">
      <div class="footerImgBlock">
        <img src={logo} alt="logo" />
      </div>
      <div class="menuBlock">
        <ul>
            <li><Link to="/"><a>Главная</a></Link></li>
            <li><Link to="/"><a>Каталог</a></Link></li>
            <li><Link to="/"><a>Услуги</a></Link></li>
            <li><Link to="/contacts"><a>Контакты</a></Link></li>
            <li><Link to="/about"><a>О нас</a></Link></li>
        </ul>
      </div>
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
    </div>
    <div class="lowerfooter">
      © “Ваша Оптика”  2008-2023
    </div>
  </div>
  )
}

export default Footer