import Taps from "./modules/Taps";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Gallery from "./modules/Gallery";

function App() {
  return (
    <div className="lg:w-[1200px] lg:mx-auto lg:mt-[108px] lg:mb-[90px]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
