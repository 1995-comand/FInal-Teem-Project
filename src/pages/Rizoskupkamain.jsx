import React, { useEffect, useState } from "react";
import headerImg from "../assets/headerimg.png";
import Sell1 from "../assets/Sell us-1.png";
import Sell2 from "../assets/Sell us-2.png";
import Sell3 from "../assets/Sell us-3.png";
import img1 from "../assets/illustration skupka 1.png";
import img2 from "../assets/illustraion skupka 3.png";
import img3 from "../assets/illustration skupka 4.png";
import img4 from "../assets/illustration skupka 5.png";
import img5 from "../assets/illustration skupka 6.png";
import img6 from "../assets/rasm1.png";
import img7 from "../assets/rasm2.png";
import img8 from "../assets/rasm3.png";
import img9 from "../assets/rasm4.png";
import img10 from "../assets/rasm5.png";
import img11 from "../assets/rasm6.png";

const Rizoskupkamain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products.slice(0, 12)));
  }, []);

  return (
    <div>
      {/* ------- HEADER ------- */}
      <div className="w-full bg-gradient-to-r from-white to-green-100 py-20 px-10 md:px-28 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 leading-snug">
            Скупка Дили–самая выгодная скупка <br /> в Москве
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Купим любые товары и б/у технику очень выгодно. <br />
            Оставьте заявку на выкуп прямо сейчас!
          </p>
          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-xl">
            Узнать цену сейчас
          </button>
        </div>

        <div className="mt-10 md:mt-0 max-w-lg">
          <img src={headerImg} alt="header" className="w-full object-contain" />
        </div>
      </div>

      {/* ------- SELL STEPS ------- */}
      <section className="w-full bg-white">
        <div className="max-w-[90%] mx-auto py-16">
          <h1 className="text-[28px] font-bold mb-10">
            Продайте нам на раз - два - три
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-6">
              <span className="text-green-500 text-5xl font-bold">1</span>
              <p className="text-[16px] font-semibold text-gray-800 leading-snug">
                Бесплатная <br /> онлайн-оценка
              </p>
              <img src={Sell1} className="w-[180px]" />
            </div>

            <div className="flex items-center gap-6">
              <span className="text-green-500 text-5xl font-bold">2</span>
              <p className="text-[16px] font-semibold text-gray-800 leading-snug">
                Привозите нам или <br /> вызовите специалиста
              </p>
              <img src={Sell2} className="w-[180px]" />
            </div>

            <div className="flex items-center gap-6">
              <span className="text-green-500 text-5xl font-bold">3</span>
              <p className="text-[16px] font-semibold text-gray-800 leading-snug">
                Подпишите договор <br /> и получите деньги
              </p>
              <img src={Sell3} className="w-[180px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ------- BENEFIT CARDS ------- */}
      <div className="flex gap-[100px] justify-center">
        <div className=" flex flex-col gap-[100px] py-[150px]">
          <div className="w-[277px] h-[300px] flex flex-col items-center text-center border border-gray-200 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white">
            <img src={img1} alt="" />
            <p className="text-[14px]">
              Выплачиваем больше на<br /> 15–20%, чем в других пунктах <br /> скупки.
            </p>
          </div>

          <div className="w-[277px] h-[300px] flex flex-col items-center text-center border border-gray-200 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white">
            <img src={img3} alt="" />
            <p className="text-[14px] w-[245px]">
              Cразу забираем товар и отдаем всю сумму наличными
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[50px]">
          <div className="w-[277px] h-[300px] flex flex-col items-center text-center border border-gray-200 rounded-2xl p-5 shadow bg-white">
            <img src={img2} alt="" />
            <p className="text-[14px] w-[245px]">
              Быстро и безопасно избавляетесь от ненужных вещей
            </p>
          </div>

          <div className="w-[277px] h-[300px] flex flex-col items-center text-center border border-gray-200 rounded-2xl p-5 shadow bg-white">
            <img src={img4} alt="" />
            <p className="text-[14px] w-[245px]">
              Наш специалист приезжает по вашему адресу
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-[100px] py-[300px]">
          <div className="w-[363px] h-[143px] text-[28px] text-green-600">
            <h1>
              ИЗБАВЛЯЙТЕСЬ <br />
              ОТ НЕНУЖНЫХ ВЕЩЕЙ <br />
              ВЫГОДНО <br /> И С ПОЛЬЗОЙ
            </h1>
          </div>

          <div className="w-[277px] h-[300px] flex flex-col items-center text-center border border-gray-200 rounded-2xl p-5 shadow bg-white">
            <img src={img5} alt="" />
            <p className="text-[14px] w-[245px]">
              Заботимся об окружающей среде, давая вторую жизнь вещам
            </p>
          </div>
        </div>
      </div>

      {/* ------- TEXT + BUTTON ------- */}
      <div className="w-full flex items-center justify-between px-20 py-10">
        <div className="text-center flex flex-col">
          <h1 className="text-[32px] font-semibold text-[#30323D]">
            У вас есть вещи, которыми вы не пользуетесь?
          </h1>

          <p className="text-[18px] text-[#60626E] mt-3">
            Сообщите нам и мы купим по самой выгодной цене!
          </p>
        </div>

        <button className="bg-[#57C46F] text-white text-[16px] px-10 py-4 rounded-full hover:bg-[#4bb763] transition-all">
          Узнать примерную стоимость
        </button>
      </div>

      {/* ------- FETCH BLOCK ------- */}
      <h2 className="text-[30px] font-semibold text-center mt-16 mb-10">
        Что мы покупаем?
      </h2>

      <div className="grid grid-cols-6 gap-8 px-20 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[180px] h-[180px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]
            flex flex-col items-center justify-center text-center p-3"
          >
            <img
              src={item.thumbnail}
              className="w-[90px] h-[90px] object-contain mb-3"
            />
            <p className="text-[16px] font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="text-[#4A4A4A] underline">Показать еще</button>
      </div>

      {/* --------- NEW SECTION 1 --------- */}
      <div className="w-full bg-white py-20 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-[380px]">
            <img src={img6} alt="illustration" className="w-full object-contain" />
          </div>

          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-[32px] md:text-[36px] font-bold text-green-600 leading-snug">
              Оставьте заявку для оценки <br /> вашего устройства
            </h1>

            <button className="mt-8 bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-3 rounded-xl">
              Узнать цену
            </button>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-[28px] font-bold text-center mb-10">Почему мы?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-20 text-center">
            <div className="flex flex-col items-center">
              <img src={img7} className="w-[70px] mb-4" />
              <h3 className="font-bold text-[18px]">Выкупаем за 5 минут</h3>
              <p className="text-gray-600 text-[14px]">Ценим ваше личное время</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={img8} className="w-[70px] mb-4" />
              <h3 className="font-bold text-[18px]">Отличная цена</h3>
              <p className="text-gray-600 text-[14px]">
                Даже лучше чем продавать через авито
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={img9} className="w-[70px] mb-4" />
              <h3 className="font-bold text-[18px]">Деньги сразу на руки</h3>
              <p className="text-gray-600 text-[14px]">
                Выплатим всю сумму наличными
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={img10} className="w-[70px] mb-4" />
              <h3 className="font-bold text-[18px]">Гарантия сделки</h3>
              <p className="text-gray-600 text-[14px]">
                Ваши данные не попадут никому
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- NEW SECTION 2 --------- */}
      <div className="w-full bg-white py-20 px-10 mt-20">
        <h1 className="text-[32px] font-bold text-center mb-2">
          Сеть скупок Dily.ru
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Работаем по всей России
        </p>

        <div className="relative w-full flex justify-center mb-20">
          <img src={img11} className="w-full max-w-4xl object-contain" />
        </div>

        <div className="w-full bg-[#F7F7F7] py-16 rounded-2xl mt-10">
          <h2 className="text-[28px] font-bold text-center mb-3">
            Остались вопросы?
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Оставьте заявку и нам менеджер свяжется с вами
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 px-5">
            <input
              type="text"
              placeholder="+7 (123)-456-78-90"
              className="w-full md:w-[300px] h-[50px] border border-gray-300 rounded-xl px-4 outline-none"
            />

            <button className="w-full md:w-[200px] bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl h-[50px]">
              Заказать звонок
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Или позвоните сами{" "}
            <span className="text-green-600 font-semibold ml-1">
              +7 (968) 430-88-20
            </span>
          </p>
        </div>
      </div>

      {/* --------- 📌 NEW SECTION FROM SCREENSHOT --------- */}
      <div className="w-full bg-white py-20 px-10 md:px-20">
        <h1 className="text-[28px] font-bold mb-6">Выгодная скупка в Москве</h1>

        <p className="text-gray-700 leading-7 mb-6">
          Специализированный ломбард «Скупка ТВ» – это профессиональная компания которая была основана в 2003 году. Занимающаяся выкупом товаров бывших в употреблении, у населения и организаций, как в частном порядке, так и крупными оптовыми партиями.
        </p>

        <p className="text-gray-700 leading-7 mb-10">
          За все эти годы работы на рынке скупки, нам удалось заслужить безупречную репутацию, а также доверие огромного числа клиентов, предпринимателей и крупных холдинговых компаний.
        </p>

        <h2 className="text-[22px] font-semibold mb-4">КАКИЕ ТОВАРЫ СКУПАЕМ</h2>

        <p className="text-gray-700 leading-7 mb-4">
          На сегодняшний день, перечень скупаемого нами ликвидного товара действительно разнообразен и включает в себя следующие позиции:
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          Компьютерное оборудование и периферия; Техника Apple, iphone, imac, ipad, macbook; Фотоаппараты, фотообъективы, карты памяти и др.;
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          Современные смартфоны и обычные телефоны; ЖК Телевизоры, лед панели; Планшеты, ноутбуки, нетбуки, неттопы, ультрабуки; Тренажеры, музыкальный инструмент;
        </p>

        <button className="text-green-600 underline mt-4">развернуть</button>
      </div>

    </div>
  );
};

export default Rizoskupkamain;
