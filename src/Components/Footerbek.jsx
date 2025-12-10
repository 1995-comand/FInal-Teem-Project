import React from 'react'

const Footerbek = () => {
  return (
    <div>
            <footer className="bg-[#f7f7f7] pt-10 pb-5 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4">

     
        <div className="mb-10">
          <p className="font-semibold mb-2">
            Вы хотите продать или купить что-либо быстро и выгодно?
          </p>
          <p className="text-gray-600 leading-relaxed">
            К вашим услугам доска бесплатных объявлений Dily. На нашем портале вы найдете, начиная от мелких бытовых приборов 
            и заканчивая недвижимостью и автомобилями. А если вы продаёте товар, услугу, своё или чужое имущество — 
            наш портал точно будет удобен и эффективен для этого! Просто разместите объявление бесплатно! <br /><br />
            Широкий ассортимент товаров и услуг. Среди категорий вы найдете технику, недвижимость, автомобили, работу, предметы 
            коллекционирования — здесь вы найдете объявления на любой вкус! Огромный аудиторием. Тысячи наших постоянных клиентов 
            посещают наш сайт ежедневно. Не упустите их, подайте объявление прямо сейчас! Удобство пользования. Продуманная структура 
            поиска объявлений позволит вам быстро найти нужные предложения. А разместить объявление вы сможете всего в несколько кликов.
          </p>

          <button className="hover:text-green-600 mt-2">развернуть</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-8 text-gray-700">

          <div className='hover:text-green-600'>
            <h3 className="font-semibold mb-3 ">Доска объявлений</h3>
            <ul className="space-y-1">
              <li>Объявления</li>
              <li>Магазины</li>
              <li>Благотворительность</li>
              <li>Личный кабинет</li>
            </ul>
          </div>

          <div className='hover:text-green-600'>
            <h3 className="font-semibold mb-3">Сервисный центр</h3>
            <ul className="space-y-1">
              <li>O компании</li>
              <li>Адреса сервисных центров</li>
            </ul>
          </div>

      
          <div className='hover:text-green-600'>
            <h3 className="font-semibold mb-3">Интернет-магазин</h3>
            <ul className="space-y-1">
              <li>Каталог товаров</li>
              <li>Доставка и оплата</li>
              <li>Корзина</li>
              <li>Личный кабинет</li>
              <li>Контакты</li>
              <li>Вакансии</li>
            </ul>
          </div>

      
          <div className='hover:text-green-600'>
            <h3 className="font-semibold mb-3">Пользователям</h3>
            <ul className="space-y-1">
              <li>Гарантия</li>
              <li>Доставка и оплата</li>
              <li>Служба поддержки</li>
              <li>Вопросы</li>
            </ul>
          </div>
        </div>

        
        <div className="flex justify-between items-center mt-10 pt-5 border-t text-gray-500 text-xs flex-wrap gap-4 hover:text-green-600">
          <div className="flex gap-4 items-center">
            <span>Присоединяйтесь к нам</span>
            <div className="flex gap-2 text-green-600 text-xl">
              <i className="facebook"></i>
              <i className="instagram"></i>
              <i className="telegram"></i>
              <i className="whatsapp"></i>
            </div>
          </div>

          <div className="flex gap-5 hover:text-green-600">
            <span>Политика конфиденциальности</span>
            <span>Пользовательское соглашение</span>
            <span>Использование cookies</span>
            <span>Карта сайта</span>
          </div>

          <div className="text-gray-700">Dily.ru © 2021</div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footerbek