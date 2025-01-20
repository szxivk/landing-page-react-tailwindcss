import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-center h-auto mb-12 mt-2">
      <div className="flex p-4 w-3/5 border-b border-[#2b4149]/10 justify-between">
        {/* logo */}
        <div className="flex gap-1.5 items-center">
          <img
            src="https://api.dicebear.com/9.x/identicon/svg?seed=Maria"
            alt="logo"
            className="size-6 rounded shrink-0 ml-3"
          />
          <span className="text-lg font-bold ml-1/2">Website</span>
        </div>
        <div className="flex gap-10">
          {/* links + button*/}
          <div className="text-sm flex gap-6 items-center">
            <span>Home</span>
            <span>Features</span>
            <span>Update</span>
            <span>Pricing</span>
          </div>

          <button
            className="flex items-center justify-center shrink-0 px-6 py-2.5
          border-b-2 border-orange-700 shadow-lg shadow-orange-600/60 
           text-sm rounded-full bg-orange-500 hover:bg-orange-600 text-[#f2f7fa]"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
