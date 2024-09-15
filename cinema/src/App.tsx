import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { movies } from "./utils/data";
import MainLayout from "./Layout/MainLayout";
import Select from "./components/Select.";
import MovieDetail from "./components/MovieDetail";

export default () => {
  return (
    <MainLayout>
      <div className="bg-red-500 min-h-screen">
        <div className="w-11/12 mx-auto pt-5">
          <Select />
          <h1 className="text-white text-3xl py-5">ESTRENOS</h1>
          <MovieDetail />
          <Swiper
            spaceBetween={7}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mt-1"
          >
            {movies.map((movie) => (
              <SwiperSlide className="max-h-[400px]">
                <img className="w-full" src={movie.img} alt="" />
                <div className="text-center uppercase text-sm space-y-1 py-2">
                  <p className="text-white">{movie.title}</p>
                  <p>{movie.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MainLayout>
  );
};
