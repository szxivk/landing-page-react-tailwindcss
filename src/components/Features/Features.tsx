"use client";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Features = () => {
  return (
    <div className="mx-52 mt-2 grid h-auto grid-cols-12 gap-4 rounded border border-orange-700 p-4">
      <Block className="col-span-6"></Block>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
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
        "col-span-4 rounded-lg border border-orange-200 bg-orange-400 p-6 text-[#f2f7fa]",
        className,
      )}
      {...rest}
    />
  );
};
