import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

import star from '../assets/images/star.png'
import testimage from '../assets/images/testimage.png'
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpeg'
import slider3 from '../assets/images/slider3.jpeg'
import slider4 from '../assets/images/slider4.jpeg'
import slider5 from '../assets/images/slider5.jpeg'
import plus1 from '../assets/images/plus1.png'
import plus2 from '../assets/images/plus2.png'
import plus3 from '../assets/images/plus3.png'
import plus4 from '../assets/images/plus4.png'
import plus5 from '../assets/images/plus5.png'
import imgleft from '../assets/images/imgleft.png'

const Homepage = props => {
  return (
    <div class="wrapper">
      <div class="sliderac">
      <Swiper
        style={{
            "--swiper-navigation-color": "#FFF500",
            "--swiper-pagination-color": "#FFF500",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
      </Swiper>
        </div>
        <h2>Новые товары</h2>
        <div class="slidernew">
                <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="swiperNewr"
            >
                <SwiperSlide>
                    <div class="item">
                        <div class="card">
                            <div class="cardpic">
                                <img src={testimage} alt=""/>
                            </div>
                            <div class="cardname">
                                <p>NEOLOOK N – 7961</p>
                            </div>
                            <div class="cardbut">
                                <button>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                        <div class="card">
                            <div class="cardpic">
                                <img src={testimage} alt=""/>
                            </div>
                            <div class="cardname">
                                <p>NEOLOOK N – 7961</p>
                            </div>
                            <div class="cardbut">
                                <button>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                            <div class="card">
                                <div class="cardpic">
                                    <img src={testimage} alt=""/>
                                </div>
                                <div class="cardname">
                                    <p>NEOLOOK N – 7961</p>
                                </div>
                                <div class="cardbut">
                                    <button>Купить</button>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                            <div class="card">
                                <div class="cardpic">
                                    <img src={testimage} alt=""/>
                                </div>
                                <div class="cardname">
                                    <p>NEOLOOK N – 7961</p>
                                </div>
                                <div class="cardbut">
                                    <button>Купить</button>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                        <div class="card">
                            <div class="cardpic">
                                <img src={testimage} alt=""/>
                            </div>
                            <div class="cardname">
                                <p>NEOLOOK N – 7961</p>
                            </div>
                            <div class="cardbut">
                                <button>Купить</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                            <div class="card">
                                <div class="cardpic">
                                    <img src={testimage} alt=""/>
                                </div>
                                <div class="cardname">
                                    <p>NEOLOOK N – 7961</p>
                                </div>
                                <div class="cardbut">
                                    <button>Купить</button>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                            <div class="card">
                                <div class="cardpic">
                                    <img src={testimage} alt=""/>
                                </div>
                                <div class="cardname">
                                    <p>NEOLOOK N – 7961</p>
                                </div>
                                <div class="cardbut">
                                    <button>Купить</button>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item">
                            <div class="card">
                                <div class="cardpic">
                                    <img src={testimage} alt=""/>
                                </div>
                                <div class="cardname">
                                    <p>NEOLOOK N – 7961</p>
                                </div>
                                <div class="cardbut">
                                    <button>Купить</button>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <h2>Наши преимущества</h2>
        <div class="pluses">
            <div class="pluscard">
                <div class="plusimg">
                    <img src={plus1}alt=""/>
                </div>
                <div class="plustext">
                    <p>Мы улучшаем наше качество обслуживания</p>
                </div>
            </div>
            <div class="pluscard">
                <div class="plusimg">
                    <img src={plus2} alt=""/>
                </div>
                <div class="plustext">
                    <p>У нас имеется квалифицированный врач-офтальмолог</p>
                </div>
            </div>
            <div class="pluscard">
                <div class="plusimg">
                    <img src={plus3} alt=""/>
                </div>
                <div class="plustext">
                    <p>Приобрести наши товары может каждый</p>
                </div>
            </div>
            <div class="pluscard">
                <div class="plusimg">
                    <img src={plus4} alt=""/>
                </div>
                <div class="plustext">
                    <p>Большой ассортимент товаров</p>
                </div>
            </div>
            <div class="pluscard">
                <div class="plusimg">
                    <img src={plus5} alt=""/>
                </div>
                <div class="plustext">
                    <p>Самые низкие цены во всем городе</p>
                </div>
            </div>
        </div>
        <h2>О нас</h2>
        <div class="onas">
            <div class="onasimg">
                <img src={imgleft} alt=""/>
            </div>
            <div class="onastext">
                <p>В наших салонах не просто продаются средства коррекции зрения, но и оказываются медицинские услуги по
                    их подбору. Здесь Вы всегда сможете получить грамотную консультацию опытного сертифицированного
                    врача-офтальмолога. Наши специалисты постоянно совершенствуют свои знания, и готовы предложить своим
                    пациентам эффективные методы профилактики и лечения проблем зрения. Подбор средств коррекции зрения
                    выполняется только квалифицированными специалистами, имеющими большой опыт работы со сложной
                    оптикой. Высокий уровень сервиса, квалифицированный и дружелюбный персонал, уютная атмосфера и
                    индивидуальный подход к каждому позволяют нам максимально удовлетворить потребности самых
                    взыскательных клиентов.<br/>Осуществляем деятельность с 2008 года.</p>
            </div>
        </div>
        <div class="otz">
            <div class="otzcard">
                <div class="otzstar">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <div class="otztext">
                    <p>Использую услуги в этот салон уже много лет без каких-либо проблем</p>
                </div>
            </div>
            <div class="otzcard">
                <div class="otzstar">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <div class="otztext">
                    <p>Действительно самые дешевые товары во всем городе, купил уже несколько пар очков и линз</p>
                </div>
            </div>
            <div class="otzcard">
                <div class="otzstar">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <div class="otztext">
                    <p>Лучший врач-офтольмолог во всём городе</p>
                </div>
            </div>
        </div>
        <h2>Остались вопросы?</h2>
        <h2>Оставьте свои данные, и мы вам перезвоним</h2>
        <center><button class="helpbut">
                <p>Помощь</p>
            </button></center>
    </div>
  )
}

export default Homepage