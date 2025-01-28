import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="mx-6 mt-4 pt-24 flex-col pl-[400px] pr-[256px] pb-2">
      <h1 className="text-[90px] leading-none font-bold text-right font-serif text-orange-500">
        Collaborate smarter with streamlined workflow
      </h1>
      <div className="flex justify-end pt-2 gap-4 items-end">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-orange-300 rounded gap-1 px-2 py-1 text-sm w-auto placeholder:text-[#2b4149]/40 focus:outline-none"
        />
        <button className="p-1 text-sm flex gap-1 items-center shadow bg-stone-50 rounded mr-5">
          Get Demo
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
