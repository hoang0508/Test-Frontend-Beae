import Taps from "./modules/Taps";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Gallery from "./modules/Gallery";
import { useActive } from "./contexts/ContextActive";

function App() {
  const { isActive } = useActive();
  return (
    <div className="lg:w-[1200px] lg:mx-auto lg:mt-[108px] lg:mb-[90px] max-sm:mb-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${!isActive ? "mySwiper2" : ""}`}
      >
        <SwiperSlide>
          <Taps />
        </SwiperSlide>
        <SwiperSlide>
          <Taps />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Gallery />
        </SwiperSlide>
        <SwiperSlide>
          <Gallery />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
