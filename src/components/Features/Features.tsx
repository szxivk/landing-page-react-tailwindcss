"use client";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Features = () => {
  return (
    <div className="mx-52 mt-14 grid h-auto grid-flow-dense grid-cols-9 gap-2 p-4">
      <HeaderBlock />
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
        "col-span-4 rounded-xl border border-orange-200 bg-orange-400 p-6 text-[#f2f7fa]",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  return <Block className="md:col-span-3 md:row-span-10"></Block>;
};

const Productivity = () => {
  return <Block className="md:col-span-2 md:row-span-10"></Block>;
};

const MoreFeatures = () => {
  return <Block className="md:col-span-4 md:row-span-12"></Block>;
};

const Shortcuts = () => {
  return <Block className="md:col-span-5 md:row-span-2"></Block>;
};
