import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="mx-6 mt-4 flex-col pb-2 pl-[400px] pr-[256px] pt-24">
      <h1 className="text-right font-serif text-[90px] font-bold leading-none text-orange-500">
        Collaborate smarter with streamlined workflow
      </h1>
      <div className="flex items-end justify-end gap-4 pt-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-auto gap-1 rounded bg-orange-300 px-2 py-1 text-sm placeholder:text-[#2b4149]/40 focus:outline-none"
        />
        <button className="mr-5 flex items-center gap-1 rounded bg-stone-50 p-1 text-sm shadow">
          Get Demo
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
