import PlayIcon from "../assets/play.png";
import ScheduleList from "./ScheduleList";
import { modalStore } from "../state/ModalState";
import { movieDetailStore } from "../state/MovieDetail";

const MovieDetail = () => {
  const { changeIsOpenModal } = modalStore();
  const { showDetails } = movieDetailStore();

  return (
    <div
      className={`transition-all duration-500 overflow-hidden ${
        showDetails ? "max-h-screen p-3" : "p-0 max-h-0"
      } bg-[#b43234] grid grid-cols-2 gap-x-4 rounded-md mt-5`}
    >
      <div className="flex gap-x-3">
        <div className="w-4/12">
          <img
            className="w-full rounded-md"
            src={
              "https://static.cinemarkhoyts.com.ar/Images/Posters/e642bb8ced7fc6c6a6d4a7c861fc69da.jpg?v=00002414"
            }
            alt=""
          />
          <p className="text-white font-normal tracking-widest px-1 w-fit my-2 border">
            AC
          </p>
          <div className="text-sm">
            <p className="text-cream font-light">
              GÉNERO: <span className="text-white font-normal">Drama</span>
            </p>
            <p className="text-cream font-light">
              DURACIÓN: <span className="text-white font-normal">138min</span>
            </p>
            <p className="text-cream font-light">
              ACTORES:{" "}
              <span className="text-white font-normal">Joaquin Phoenix</span>
            </p>
            <p className="text-cream font-light">
              DIRECTOR:{" "}
              <span className="text-white font-normal">Todd Phillips</span>
            </p>
          </div>
        </div>
        <div className="w-8/12 text-white">
          <div
            className="relative cursor-pointer rounded-md overflow-hidden"
            onClick={() => changeIsOpenModal(true)}
          >
            <img src={"https://i.ytimg.com/vi/7jS0THWG35M/hq720.jpg"} alt="" />
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={PlayIcon}
              alt=""
            />
          </div>
          <p className="text-lg font-bold my-1">GUASON 2 FOLIE A DEUX</p>
          <p className="text-xs mt-3 text-[#febbbb] font-light italic">
            Secuela de Guasón (2019), de nuevo con Phoenix como Arthur Fleck, y
            que muestra su relación con el personaje de Harley Quinn,
            interpretado por Lady Gaga.
          </p>
        </div>
      </div>

      <ScheduleList />
    </div>
  );
};

export default MovieDetail;
