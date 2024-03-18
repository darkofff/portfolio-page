import { useContext, useEffect, useRef } from "react";
import Content from "./Content";

function Frame() {
  return (
    <div className="on-hover absolute z-10 h-full max-h-[50rem] w-screen max-w-screen-xl overflow-hidden lg:inset-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="absolute">
        <div className=" on-change-transition-1 clip-triangle on-change-color absolute h-44 w-44 overflow-hidden rounded-tl-md bg-gradient-to-tr  from-indigo-500 via-purple-500 to-pink-500 opacity-40 transition-all duration-500 sm:h-72 sm:w-72 sm:rounded-tl-lg"></div>
        <div className=" on-change-transition-square-1 absolute left-4 top-4 h-[16.7rem] w-[16.7rem] rounded-sm bg-zinc-900 sm:left-6 sm:top-6 sm:h-[16.7rem] sm:w-[16.7rem] sm:rounded-lg"></div>
      </div>
      <Content />
      <div className="absolute bottom-0 right-0">
        <div className=" clip-triangle on-change-transition-2 on-change-color absolute bottom-0 right-0 h-44 w-44 rotate-180  overflow-hidden rounded-tl-md from-indigo-500  via-purple-500 to-pink-500  opacity-40 transition-all duration-500 sm:h-72 sm:w-72 sm:rounded-tl-lg md:bg-gradient-to-tr"></div>
        <div className=" on-change-transition-square-2 absolute bottom-4 right-4 h-[16.7rem] w-[16.7rem] rounded-sm bg-zinc-900 sm:bottom-6 sm:right-6 sm:h-[16.7rem] sm:w-[16.7rem] sm:rounded-lg"></div>
      </div>
    </div>
  );
}

export default Frame;
