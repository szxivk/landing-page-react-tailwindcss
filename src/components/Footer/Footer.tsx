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
    <div className="mt-24 w-full bg-white py-24 pl-52">
      <div className="flex items-start justify-between">
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
        <div className="flex gap-40 text-sm">
          <ul>
            <li className="mb-6 font-semibold">Product</li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Admissions
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#
              "
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Charting
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Billing
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Scheduling
              </a>
            </li>
          </ul>
          <ul>
            <li className="mb-6 font-semibold">Company</li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Features
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Why Website?
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Blog
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <ul className="mr-72">
            <li className="mb-6 font-semibold">Support</li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Contact Us
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:transform before:rounded-md before:bg-orange-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-left hover:before:scale-x-100"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
