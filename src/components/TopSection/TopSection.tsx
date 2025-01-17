import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const TopSection = () => {
  return (
    <div className="flex-col h-screen">
      <Header />
      <Hero />
    </div>
  );
};
