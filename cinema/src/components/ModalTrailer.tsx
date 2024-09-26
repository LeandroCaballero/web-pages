import { useEffect } from "react";
import { modalStore } from "../state/ModalState";

const ModalTrailer = () => {
  const { changeIsOpenModal } = modalStore();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      changeIsOpenModal(false);
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className={`bg-gray-500 bg-opacity-50 h-screen w-full flex items-center justify-center z-50 fixed top-0`}
    >
      <div className="w-2/3 h-3/4 rounded-lg p-2">
        <div className="flex justify-end">
          <button
            onClick={() => changeIsOpenModal(false)}
            className="rounded-full w-7 h-7 border border-white text-white mb-2 flex items-center justify-center"
          >
            X
          </button>
        </div>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/01UXuz00UkI?si=DBbDLv92wsU8Gjm8&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ModalTrailer;
