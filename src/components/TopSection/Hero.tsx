import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="mx-6 mt-4 flex-col pb-2 pl-[200px] pr-[256px] pt-24">
      <h1 className="text-right font-serif text-[80px] font-bold leading-none text-[#1E212B]">
        Collaborate smarter with streamlined workflow
      </h1>
      <div className="flex items-end justify-end gap-4 pt-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-auto gap-1 rounded border border-green-700 bg-white/60 px-2 py-1 text-sm placeholder:text-[#1E212B]/60 focus:outline-none"
        />
        <button className="mr-5 flex items-center gap-1 rounded-lg border-b-2 border-green-700 bg-[#7CE100] p-1 text-sm shadow hover:bg-lime-400">
          Get Demo
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
