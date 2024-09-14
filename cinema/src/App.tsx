// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { movies } from "./utils/data";

export default () => {
  return (
    <div>
      <h1 className="text-red-500">test</h1>
      <Swiper
        spaceBetween={7}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie) => (
          <SwiperSlide className="max-h-[400px]">
            <img className="w-full " src={movie.img} alt="" />
            <div>
              <p>{movie.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
