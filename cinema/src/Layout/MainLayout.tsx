import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <nav className="w-full px-20 grid grid-cols-7 bg-black py-3 text-white fixed top-0 z-50">
        <a href="/" className="col-span-1 flex items-center">
          <img
            src={"https://www.cinemarkhoyts.com.ar/images/res/logo.png?v=2"}
            alt=""
          />
        </a>
        <div className="col-start-3 text-sm items-center col-span-4 flex justify-evenly uppercase text-[#919191] font-extrabold">
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
