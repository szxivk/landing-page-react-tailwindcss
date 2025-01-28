import React from "react";

export const Header = () => {
  return (
    <div className="flex h-auto justify-center">
      <div className="flex w-3/5 justify-between border-b border-[#2b4149]/10 pb-3 pt-2">
        {/* logo */}
        <div className="flex items-center gap-1.5">
          <img
            src="https://api.dicebear.com/9.x/identicon/svg?seed=Maria"
            alt="logo"
            className="ml-5 size-6 shrink-0 rounded"
          />
          <span className="ml-1/2 text-lg font-bold">Website</span>
        </div>
        <div className="flex gap-16">
          {/* links + button*/}
          <div className="flex items-center gap-6 text-sm">
            <span>Home</span>
            <span>Features</span>
            <span>Update</span>
            <span>Pricing</span>
          </div>

          <button className="mr-5 flex shrink-0 items-center justify-center rounded-full border-b-2 border-orange-700 bg-orange-500 px-6 py-2.5 text-sm text-[#f2f7fa] shadow-lg shadow-orange-600/60 hover:bg-orange-600">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
