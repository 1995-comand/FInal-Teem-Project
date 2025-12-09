import React from 'react'
import heroLAPTOP from '../assets/laptop.png';
import fourINone from '../assets/Frame 575.png';
import img1 from '../assets/2.png';
import img2 from '../assets/3.png';
import img3 from '../assets/4.png';
import img4 from '../assets/5.png';
import img5 from '../assets/6.png';
import img6 from '../assets/7.png';
import img7 from '../assets/8.png';
import img8 from '../assets/9.png';
import img9 from '../assets/10.png';
import img10 from '../assets/11.png';
import img11 from '../assets/12.png';
import img12 from '../assets/13.png';
import imageee from '../assets/Imagee.png';
import Arrow1 from '../assets/Union.png';
import arrow2 from '../assets/default.png';
import right from '../assets/right.png';
import left from '../assets/left.png';
import middle from '../assets/something.png';
import chat from '../assets/chat.png';

const ServiceZ = () => {
  return (
    <div className='bg-white'>

    <div className="hero  min-h-screen shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroLAPTOP}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Laptop"
          />
          <div>
            <h1 className="text-5xl font-bold text-black">Просто решаем сложные проблемы</h1>
            <p className="py-6 text-black">
              Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!
            </p>
            <div className=''>
            <button className="btn btn-primary text-white ">Get Started</button>
            <button className="btn btn-primary ml-9 text-white ">Узнать статус ремонта</button>
            </div>
          </div>
        </div>
      </div>

      <img src={fourINone} className="mx-auto mt-25 " alt="Four in one" />

      <div>
        <h1 className="text-center text-3xl font-bold mt-10 text-black">Мы ремонтируем</h1>

        <div>  <div className='flex gap-6'>
                     <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img1} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Apple</h2>
          </div>
                     </div>
        
               <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img2} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Phones</h2>
          </div>
              </div>
                <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img3} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Tablets</h2>
          </div>
              </div>
                <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img4} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Laptops</h2>
          </div>
              </div>  <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img5} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Monoblock</h2>
          </div>
              </div>
               <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img6} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Screen</h2>
          </div>
              </div>
             
               </div>
               <div className='flex gap-6'>
              
               <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img7} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Audio</h2>
          </div>
              </div>
               <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img8} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Broken thing</h2>
          </div>
              </div>
               <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img9} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Photo und Video</h2>
          </div>
              </div>
            <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img10} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">ORG technic</h2>
          </div>
              </div>
                <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img11} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">DJ thing</h2>
          </div>
              </div>
                <div className="card  w-46 shadow-sm mx-auto mt-6 bg-white">
          <figure>
            <img src={img12} alt="Service" />
          </figure>
          <div className="card-body"><br />
            <h2 className="text-2xl text-center text-black">Tools</h2>
          </div>
              </div>
               </div>
                       </div>
</div>
              <img src={middle} className="mt-25 text-center ml-50" alt="mid" />

<div className="flex justify-between mt-10">
    <img src={right} className="" alt="rightImg" />
    <div className="">
      <h1 className="text-green-500 text-center text-4xl">Узнайте стоимость ремонта онлайн </h1><br />
      <h6 className="text-black text-center">И получите скидку 5%</h6>
      <button className="w-50 h-10 text-center ml-50 mt-15 text-white rounded-xl bg-green-500">Узнать</button>
      </div>
    <img src={left} className="" alt="leftImg" />
  </div>


<div className="justify-center flex mt-20">
  <div className="card w-96 shadow-sm bg-white">
  <figure>
    <img
      src={imageee}
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-green-500 text-2xl">Модульный ремонт</h2>
    <p className="text-black text-lg">Замена блока питания</p>
    <p className="text-black text-lg">Чистка от пыли</p>
    <p className="text-black text-lg">Замена кнопок громкости</p>
    <p className="text-black text-lg">Замена кнопки Home (домой)</p>
    <img src={Arrow1} className="w-5 item-center" alt="Shoes" />
     <div className="card-actions justify-end mt-2">
          <img src={arrow2} className="w-10 justify-end" alt="Shoes" />
    </div>

  </div>
</div>
<div className="card w-96 shadow-sm bg-white">
  <figure>
    <img
      src={imageee}
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-green-500 text-2xl">Модульный ремонт</h2>
    <p className="text-black text-lg">Замена блока питания</p>
    <p className="text-black text-lg">Чистка от пыли</p>
    <p className="text-black text-lg">Замена кнопок громкости</p>
    <p className="text-black text-lg">Замена кнопки Home (домой)</p>
    <img src={Arrow1} className="w-5 item-center" alt="Shoes" />
     <div className="card-actions justify-end mt-2">
          <img src={arrow2} className="w-10 justify-end" alt="Shoes" />
    </div>

  </div>
</div>
<div className="card w-96 shadow-sm bg-white">
  <figure>
    <img
      src={imageee}
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-green-500 text-2xl">Модульный ремонт</h2>
    <p className="text-black text-lg">Замена блока питания</p>
    <p className="text-black text-lg">Чистка от пыли</p>
    <p className="text-black text-lg">Замена кнопок громкости</p>
    <p className="text-black text-lg">Замена кнопки Home (домой)</p>
    <img src={Arrow1} className="w-5 item-center" alt="Shoes" />
     <div className="card-actions justify-end mt-2">
          <img src={arrow2} className="w-10 justify-end" alt="Shoes" />
    </div>

  </div>
</div>
<div className="card w-96 shadow-sm bg-white">
  <figure>
    <img
      src={imageee}
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-green-500 text-2xl">Модульный ремонт</h2>
    <p className="text-black text-lg">Замена блока питания</p>
    <p className="text-black text-lg">Чистка от пыли</p>
    <p className="text-black text-lg">Замена кнопок громкости</p>
    <p className="text-black text-lg">Замена кнопки Home (домой)</p>
    <img src={Arrow1} className="w-5 item-center" alt="Shoes" />
     <div className="card-actions justify-end mt-2">
          <img src={arrow2} className="w-10 justify-end" alt="Shoes" />
    </div>

</div>
  
  </div>
</div>

  
    </div>
  )
}

export default ServiceZ