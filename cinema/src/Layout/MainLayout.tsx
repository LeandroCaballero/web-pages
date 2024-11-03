import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-full px-3 md:px-20 grid grid-cols-3 md:grid-cols-7 bg-black py-3 text-white fixed top-0 z-50">
        <div className="block md:hidden col-span-1">
          <Icon
            icon="material-symbols:menu"
            className="w-8 h-8"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div
          className={`block md:hidden absolute h-screen w-4/5 transition-all duration-200 ease-out left-0 top-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-black opacity-90 z-50`}
        >
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <p className="text-lg">LOGO</p>
              <button onClick={() => setIsOpen(false)}>
                <Icon icon="material-symbols:close" className="w-8 h-8" />
              </button>
            </div>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
            <a className="py-3 border-b" href="">
              peliculas
            </a>
          </div>
        </div>
        <a
          href="/"
          className="col-start-2 md:col-start-1 col-span-1 flex items-center"
        >
          <img
            src={"https://www.cinemarkhoyts.com.ar/images/res/logo.png?v=2"}
            alt=""
          />
        </a>
        <div className="hidden col-start-3 text-sm items-center col-span-4 md:flex justify-evenly uppercase text-[#919191] font-extrabold">
          <a href="">peliculas</a>
          <a href="">peliculas</a>
          <a href="">peliculas</a>
          <a href="">peliculas</a>
          <a href="">peliculas</a>
          <a href="">peliculas</a>
          <a href="">peliculas</a>
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <img
            src={"https://www.cinemarkhoyts.com.ar/images/res/user-outline.png"}
            alt=""
          />
        </div>
      </nav>
      <div className="mt-[54px]">{children}</div>
    </>
  );
};

export default MainLayout;
