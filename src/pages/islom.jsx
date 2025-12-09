import React from "react";

const Islom = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 py-10">
      <div className="w-[900px] bg-white p-8 rounded-xl shadow-lg space-y-6">

        <div className="grid grid-cols-2 gap-4">
          <input type="text" className="input input-bordered w-full" placeholder="Which browser do you use" />
          <input type="text" className="input input-bordered w-full" placeholder="Which browser do you use" />
        </div>

        <input type="text" placeholder="Type here" className="input input-bordered w-full" />

        <div className="flex items-center gap-2">
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          <p className="text-lg font-bold">$</p>
        </div>

        <input type="text" className="input input-bordered w-full" placeholder="Which browser do you use" />

        <textarea className="textarea textarea-bordered w-full h-32" placeholder="Описание"></textarea>

        <p className="text-sm text-gray-500">Не более 3000 символов</p>

        <div className="flex items-center gap-4">
          <img src="" alt="" className="w-24 h-20 bg-gray-200 rounded-lg" />
          <img src="" alt="" className="w-24 h-20 bg-gray-200 rounded-lg" />
          <img src="" alt="" className="w-24 h-20 bg-gray-200 rounded-lg" />
          <img src="" alt="" className="w-24 h-20 bg-gray-200 rounded-lg" />
        </div>

        <p className="text-sm text-gray-500">Вы можете загрузить не более 10 фотографий</p>

        <label className="input input-bordered flex items-center gap-2">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" className="grow" />
        </label>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47907.30255494519!2d69.2813824!3d41.3696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1765269242052!5m2!1sru!2s"
          width="600"
          height="450"
          className="w-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

        <input type="text" className="input input-bordered w-full" placeholder="Which browser do you use" />

        <div className="flex items-center gap-2">
          <input type="text" placeholder="You can't touch this" className="input input-bordered w-full" disabled />
          <p className="font-bold">$</p>
        </div>

        <div className="flex items-center gap-2">
          <input type="text" placeholder="You can't touch this" className="input input-bordered w-full" disabled />
          <p className="font-bold">$</p>
        </div>

        <input type="text" placeholder="Type here" className="input input-bordered w-full" />

        <fieldset className="fieldset space-y-2">
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="default" />
            Default
          </label>
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="retro" />
            Retro
          </label>
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="cyberpunk" />
            Cyberpunk
          </label>
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="valentine" />
            Valentine
          </label>
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="aqua" />
            Aqua
          </label>
        </fieldset>

        <input type="text" className="input input-bordered w-full" placeholder="Which browser do you use" />

        <button className="btn btn-primary w-full">Submit</button>
      </div>
    </div>
  );
};

export default Islom;
    