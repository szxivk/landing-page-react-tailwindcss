import React from "react";

export const TopSection = () => {
  return (
    <div className="flex justify-center items-start mb-6">
      <div className="flex p-4 w-3/5 rounded-full border border-stone-100 justify-between">
        {/* logo */}
        <div className="flex gap-1.5 items-center">
          <img
            src="https://api.dicebear.com/9.x/identicon/svg?seed=Maria"
            alt="logo"
            className="size-5 rounded shrink-0"
          />
          <span className="text-sm font-extrabold">Website</span>
        </div>
        <div className="flex gap-10">
          {/* links + button*/}
          <div className="text-xs flex gap-6 items-center">
            <span>Home</span>
            <span>Features</span>
            <span>Update</span>
            <span>Pricing</span>
          </div>

          <button className="text-xs px-3 py-1.5 border rounded-full border-stone-400">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
