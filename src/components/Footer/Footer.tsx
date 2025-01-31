import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlinePhone,
} from "react-icons/md";

export const Footer = () => {
  return (
    <div className="mt-24 w-full rounded-3xl border-t border-gray-500 px-44 py-24">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-2">
            <img
              src="https://api.dicebear.com/9.x/identicon/svg?seed=Maria"
              alt="logo"
              className="size-8 shrink-0 rounded"
            />
            <span className="ml-1/2 text-2xl font-bold">Website</span>
          </div>
          <div className="mt-8 flex items-center justify-start gap-2 text-sm">
            <MdOutlineLocationOn />
            <span>Location, India - 105176</span>
          </div>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm">
            <MdOutlineMail />
            <span>Someone@website.net</span>
          </div>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm">
            <MdOutlinePhone />
            <span>(+91) 3333-777-444</span>
          </div>
          <div className="mt-6 flex gap-2">
            <button className="rounded-full border border-[#2b4149] p-2">
              <FaXTwitter />
            </button>
            <button className="rounded-full border border-[#2b4149] p-2">
              <FaLinkedin />
            </button>
            <button className="rounded-full border border-[#2b4149] p-2">
              <FaInstagram />
            </button>
            <button className="rounded-full border border-[#2b4149] p-2">
              <FaFacebook />
            </button>
          </div>
        </div>
        {/* all links in row of 3 */}
      </div>
    </div>
  );
};
