import React from "react";

export const TopSection = () => {
  return (
    <div className="flex justify-center items-center border border-b-gray-100 h-24">
      <div className="p-4 rounded-full border border-stone-100">
        {/* logo and links in a container */}
        <div className="flex justify-between">
          {/* logo side */}
          <div className="flex gap-1.5 items-center">
            <img
              src="https://api.dicebear.com/9.x/identicon/svg?seed=Maria"
              alt="logo"
              className="size-5 rounded shrink-0"
            />
            <span className="text-sm font-bold text-orange-400">Website</span>
          </div>
        </div>

        {/* links */}

        {/* sign-up button */}
      </div>
    </div>
  );
};
