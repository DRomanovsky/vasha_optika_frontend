import React from "react";
import onas1 from "../assets/images/onas1.png"
import onas2 from "../assets/images/onas2.png"
import onas3 from "../assets/images/onas3.png"
import onas4 from "../assets/images/onas4.png"
import onas5 from "../assets/images/onas5.png"
import onas6 from "../assets/images/onas6.png"
const Onas = () => {
  return (
    <div className="wrapper">
      <div className="blockHolder">
        <div className="block" id="block1">
          <p>
            <b>В "Нашей Оптике" доступны следующие виды услуг:</b>
          </p>
          <ul>
            <li>
              консультация врача-офтальмолога и проверка зрения с оформлением
              рецепта;
            </li>
            <li>
              индивидуальный подбор коррекции зрения (медицинских очков и
              контактных линз);
            </li>
            <li>
              заказ очков для коррекции зрения и подбор оправы, которая будет
              современной, модной, стильной и подходящей именно Вам;
            </li>
            <li>
              заказ «сложных» очков для зрения с индивидуальными особенностями;
            </li>
            <li>продажа контактных линз;</li>
            <li>
              продажа готовых очков для коррекции близорукости и дальнозоркости;
            </li>
            <li>замена очковых линз в Вашей любимой оправе;</li>
            <li>продажа солнцезащитных очков.</li>
          </ul>
        </div>
        <div className="holder">
          <div className="img">
            <img src={onas1} alt="onas1" />
          </div>
          <div className="block">
            <p>
              В наших салонах не просто продаются средства коррекции зрения, но
              и оказываются медицинские услуги по их подбору. Здесь Вы всегда
              сможете получить грамотную консультацию опытного
              сертифицированного врача-офтальмолога. Наши специалисты постоянно
              совершенствуют свои знания, и готовы предложить своим пациентам
              эффективные методы профилактики и лечения проблем зрения.
            </p>
          </div>
        </div>
        <div className="holder">
          <div className="block">
            <p>
              Подбор средств коррекции зрения выполняется только
              квалифицированными специалистами, имеющими большой опыт работы со
              сложной оптикой. Высокий уровень сервиса, квалифицированный и
              дружелюбный персонал, уютная атмосфера и индивидуальный подход к
              каждому позволяют нам максимально удовлетворить потребности самых
              взыскательных клиентов.
            </p>
          </div>
          <div className="img">
            <img src={onas2} alt="onas2" />
          </div>
        </div>
        <div className="blockSpec">
          <p>Осуществляем деятельность с 2008 года.</p>
        </div>
        <div className="gallery">
          <img src={onas3} alt="onas3" />
          <img src={onas4} alt="onas4" />
          <img src={onas5} alt="onas5" />
          <img src={onas6} alt="onas6" />
        </div>
      </div>
    </div>
  );
};

export default Onas;
