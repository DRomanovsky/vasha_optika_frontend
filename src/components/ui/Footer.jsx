import React from 'react'
import logo from '../../assets/images/logoup.jpg'
import vklink from '../../assets/images/vk-logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
    <div className="upperFooter">
      <div className="footerImgBlock">
        <img src={logo} alt="logo" />
      </div>
      <div className="menuBlock">
      <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
      </div>
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
            +7(XXX)-XXX-XX-XX
          </div>
        </div>
        
      </div>
    </div>
    <div className="lowerfooter">
      © “Ваша Оптика”  2008-2023
    </div>
  </div>
  )
}

export default Footer