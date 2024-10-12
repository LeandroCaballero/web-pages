import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { movies, optionsSelectProvince } from "./utils/data";
import MainLayout from "./Layout/MainLayout";
import Select from "./components/Select.";
import MovieDetail from "./components/MovieDetail";
import { modalStore } from "./state/ModalState";
import ModalTrailer from "./components/ModalTrailer";
import { movieDetailStore } from "./state/MovieDetail";
import { Icon } from "@iconify/react";

export default () => {
  const { isOpen } = modalStore();
  const { changeIsOpenShowDetails, setMovieDetails, showDetails } =
    movieDetailStore();

  const selectMovie = (movie: any) => {
    setMovieDetails(movie);
    changeIsOpenShowDetails(true);
  };

  return (
    <MainLayout>
      <div className="bg-red-500 min-h-screen">
        <div className="w-11/12 mx-auto pt-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3">
              <Select
                title="Seleccioná una provincia"
                options={optionsSelectProvince}
                onChange={() => console.log("change")}
              />
              <Select
                title="Seleccioná un cine"
                options={optionsSelectProvince}
                onChange={() => console.log("change")}
              />
            </div>
            {showDetails && (
              <button
                onClick={() => changeIsOpenShowDetails(false)}
                className="rounded-full w-8 h-8 text-white text-2xl flex items-center justify-center"
              >
                <Icon
                  icon="icon-park-outline:close-one"
                  className="w-24 h-24"
                />
              </button>
            )}
          </div>
          <MovieDetail />
          <h1 className="text-white text-3xl py-5 font-poppins">
            EN CARTELERA
          </h1>
          <Swiper
            spaceBetween={7}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mt-1"
          >
            {movies.map((movie) => (
              <SwiperSlide
                className="max-h-[400px] cursor-pointer"
                onClick={() => selectMovie(movie)}
                key={movie.title}
              >
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
      {isOpen && <ModalTrailer />}
    </MainLayout>
  );
};
