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
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SiNotion, SiSlack, SiTrello } from "react-icons/si";
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
    <Block
      whileHover={{
        scale: 1.1,
      }}
      className="text-[#2b4149] md:col-span-3 md:row-span-10"
    >
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
      <div className="mx-8 mb-2 border-b border-stone-200 pb-4 text-start">
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
        <button className="shrink-0 rounded-lg border-b-2 border-orange-700 bg-orange-500 px-6 py-3 text-[#f2f7fa] shadow-lg shadow-orange-600/60 hover:bg-orange-600">
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
    <Block
      whileHover={{
        scale: 1.1,
      }}
      className="relative border-pink-100/80 bg-gradient-to-tr from-indigo-100 via-pink-200 to-green-200 p-8 text-[#1E212B] md:col-span-2 md:row-span-10"
    >
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
  return (
    <Block
      whileHover={{
        scale: 1.1,
      }}
      className="relative md:col-span-4 md:row-span-12"
    >
      <div className="absolute bottom-28 left-24 right-24 top-28 origin-bottom-right rotate-12 rounded-2xl border border-[#dfe7ec] bg-gradient-to-tl from-[#dceaf3] to-[#deecf4] text-[#2b4149] shadow-lg">
        <div className="flex items-center justify-start gap-1 rounded-t-2xl border-b border-[#dfe7ec] bg-[#e5f4f8] px-4 py-2 font-semibold">
          <SiTrello />
          <span className="font-sm flex items-center gap-1.5 opacity-90">
            Trello
          </span>
        </div>
        <div className="px-6 pt-6">
          <h3 className="mb-2 text-xs text-stone-500">Task Created:</h3>
          <div className="border-b border-stone-200 pb-4 font-semibold leading-snug">
            Send the email invoice to Martin S.
          </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <span className="block font-semibold">Monday, 3 Feb</span>
          <span className="block text-sm text-stone-500">11:13 AM</span>
        </div>
      </div>
      <div className="absolute bottom-28 left-24 right-24 top-28 origin-bottom-right -rotate-12 rounded-2xl border border-[#fcf1e3] bg-gradient-to-tr from-[#f7c990] to-[#f9d7a7] text-[#2b4149] shadow-lg">
        <div className="flex items-center justify-start gap-1 rounded-t-2xl border-b border-[#fcf1e3] bg-[#fbdfbb] px-4 py-2 font-semibold">
          <SiSlack />
          <span className="font-sm flex items-center gap-1.5 opacity-90">
            Slack
          </span>
        </div>
        <div className="px-6 pt-6">
          <h3 className="mb-2 text-xs text-stone-500">Task Created:</h3>
          <div className="border-b border-stone-200 pb-4 font-semibold leading-snug">
            Send the email invoice to Martin Z.
          </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <span className="block font-semibold">Monday, 3 Feb</span>
          <span className="block text-sm text-stone-500">4:00 pm</span>
        </div>
      </div>
      <div className="absolute bottom-28 left-24 right-24 top-28 rounded-2xl border border-gray-200 bg-white text-[#2b4149] shadow-2xl">
        <div className="flex items-center justify-start gap-1 rounded-t-2xl border-b border-gray-200 bg-gray-100 px-4 py-2 font-semibold">
          <SiNotion />
          <span className="font-sm flex items-center gap-1.5 opacity-90">
            Notion
          </span>
        </div>
        <div className="px-6 pt-6">
          <h3 className="mb-2 text-xs text-stone-500">Task Created:</h3>
          <div className="border-b border-stone-200 pb-4 font-semibold leading-snug">
            Send the email invoice to Martin W.
          </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <span className="block font-semibold">Monday, 3 Feb</span>
          <span className="block text-sm text-stone-500">11:13 AM</span>
        </div>
      </div>
    </Block>
  );
};

const Shortcuts = () => {
  return (
    <Block
      whileHover={{
        scale: 1.1,
      }}
      className="p-8 md:col-span-5 md:row-span-2"
    >
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
