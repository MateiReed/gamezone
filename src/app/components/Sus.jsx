"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedBackground } from 'animated-backgrounds';
function App() {
  return (
    <div>
      <AnimatedBackground animationName="starryNight" /></div>
  );
}
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-center "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-1000">
            SC GAMEZONE SRL
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // "Game Developer",
                // 1000,
                "Joacă",
                1500,
                // "Mobile Developer",
                // 1000,
                "Concurează",
                1500,
                "Cucerește",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          SC GAMEZONE SRL este un <span className="text-purple-600">spațiu modern</span> destinat <span className="text-purple-600"> pasionaților</span> de gaming și tehnologie.
</h2>
          
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-cyan-1000 hover:bg-slate-200 text-white"
            >
              Rezerva!
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-bl from-purple-300 to-cyan-1000 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Socials
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
