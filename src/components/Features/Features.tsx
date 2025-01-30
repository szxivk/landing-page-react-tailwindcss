"use client";
import { motion, MotionProps } from "framer-motion";
import { BsFillPlayFill } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaSlack } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiCommand, FiPlus } from "react-icons/fi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { ImCtrl } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  MdOutlineChevronRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const Features = () => {
  return (
    <div className="mx-52 mt-14 grid h-auto grid-flow-dense grid-cols-9 gap-2 p-4">
      <CalendarBlock />
      <Productivity />
      <MoreFeatures />
      <Shortcuts />
    </div>
  );
};

type Props = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-3xl border border-gray-200 bg-white text-[#f2f7fa]",
        className,
      )}
      {...rest}
    />
  );
};

const CalendarBlock = () => {
  return (
    <Block className="text-stone-700 md:col-span-3 md:row-span-10">
      <div className="flex items-center justify-between rounded-t-3xl border-b border-gray-200 bg-gray-100 px-8 pb-5 pt-5">
        <h3 className="flex items-center gap-1.5 font-medium text-stone-600">
          Calendar
        </h3>
        <HiOutlineCalendarDateRange className="size-5" />
      </div>
      <div className="flex items-center gap-2 px-8 pb-6 pt-8 text-stone-500">
        <FcGoogle className="size-6" />
        Hangouts
      </div>
      <div className="mx-8 mb-2 border-b border-stone-400 pb-4 text-start">
        <span className="mb-1 block text-2xl font-semibold">
          Wednesday, 29 Jan
        </span>
        <span className="block text-sm text-stone-500">10:00 - 11:13 AM</span>
      </div>
      <div className="mx-8 mb-12 flex items-center gap-2">
        Created from:
        <div className="flex items-center gap-1 font-bold">
          <FaSlack /> Slack
        </div>
      </div>
      <div className="mx-8 mb-8 flex items-center justify-between">
        <button className="rounded-lg bg-orange-500 px-6 py-3 text-[#f2f7fa]">
          Confirm meet
        </button>
        {/* two icons button*/}
        <div className="flex items-center gap-1">
          <button>
            <IoIosNotificationsOutline className="size-6" />
          </button>
          <button>
            <CiCircleMore className="size-6" />
          </button>
        </div>
      </div>
    </Block>
  );
};

const Productivity = () => {
  return (
    <Block className="relative bg-gradient-to-tl from-orange-200 from-20% to-orange-500 p-8 text-[#2b4149] md:col-span-2 md:row-span-10">
      <div className="flex items-center justify-start">
        <h3 className="text-6xl font-bold leading-none">3X </h3>
        <MdOutlineKeyboardDoubleArrowRight className="size-20 opacity-70" />
      </div>
      <div className="absolute bottom-8 left-8 right-8 mt-10 text-sm leading-snug">
        Triple your team's productivity with our cutting-edge solutions
      </div>
    </Block>
  );
};

const MoreFeatures = () => {
  return <Block className="md:col-span-4 md:row-span-12"></Block>;
};

const Shortcuts = () => {
  return (
    <Block className="p-8 md:col-span-5 md:row-span-2">
      <div className="flex items-center">
        <div className="mr-auto">
          <h3 className="text-xl font-semibold text-[#2b4149]">Shortcuts</h3>
          <span className="text-sm text-stone-500">
            Simplify access to main features
          </span>
        </div>
        <div className="flex items-center text-[#2b4149]">
          <div className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-100 p-4">
            <FiCommand className="size-6" />
            <ImCtrl className="size-6" />
          </div>
          <div className="p-4">
            <FiPlus className="size-6" />
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4">
            <BsFillPlayFill className="size-6" />
          </div>
        </div>
      </div>
    </Block>
  );
};
