// CategoriesSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const data = [
    { title: "Личные вещи", img: "src/assets/Group.png" },
    { title: "Телефоны и аксессуары", img: "src/assets/phone.png" },
    { title: "Электроника", img: "src/assets/electronic.png" },
    { title: "Бытовая техника", img: "src/assets/off.png" },
    { title: "Дом и сад", img: "src/assets/ab.png" },
    { title: "Животные", img: "src/assets/balu.png"},
    { title: "Товары для детей", img: "src/assets/soska.png" },
    { title: "Хобби и отдых", img: "src/assets/kanki.png" },
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
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-2">
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
