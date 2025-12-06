// CategoriesSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const data = [
    { title: "Личные вещи", img: "/icons/1.png" },
    { title: "Телефоны и аксессуары", img: "/icons/2.png" },
    { title: "Электроника", img: "/icons/3.png" },
    { title: "Бытовая техника", img: "/icons/4.png" },
    { title: "Дом и сад", img: "/icons/5.png" },
    { title: "Животные", img: "/icons/6.png" },
    { title: "Товары для детей", img: "/icons/7.png" },
    { title: "Хобби и отдых", img: "/icons/8.png" },
];

export default function CategoriesSlider() {
    return (
        <div className="w-full py-6">
            <h2 className="text-xl font-semibold mb-4">Вы ищете:</h2>
            

            <Swiper
                slidesPerView={4.5}
                spaceBetween={15}
                freeMode={true}
                modules={[FreeMode]}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                <img src={item.img} alt={item.title} className="w-10 h-10" />
                            </div>
                            <p className="text-center text-sm">{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
