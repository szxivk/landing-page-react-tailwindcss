import React from "react";

export const TopSection = () => {
  return (
    <div className="flex justify-center items-start mb-6">
      <div className="p-4 w-4/5 rounded-full border border-stone-100">
        {/* logo and links in a container */}
        <div className="flex justify-between">
          {/* logo side */}
          <div className="flex gap-1.5 items-center">
            <img
              src="https://api.dicebear.com/9.x/identicon/svg?seed=Maria"
              alt="logo"
              className="size-5 rounded shrink-0"
            />
            <span className="text-sm font-extrabold">Website</span>
          </div>
          {/* links */}
          <div className="text-xs flex gap-6 items-center">
            <span>Home</span>
            <span>Features</span>
            <span>Update</span>
            <span>Pricing</span>
          </div>
        </div>

        {/* sign-up button */}
      </div>
    </div>
  );
};
