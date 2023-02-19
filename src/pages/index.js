// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import React from "react";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";

const HOME = () => {
  return (
    <div className="main__wrapper">
      <Header />
      <Categories/>
      <Hero/>
      <ImageSlider/>
    </div>
  );
};

export default HOME;
