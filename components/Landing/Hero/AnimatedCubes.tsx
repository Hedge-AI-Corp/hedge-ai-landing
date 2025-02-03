"use client";

import React from "react";
import { motion } from "motion/react";

const CubeFace = ({ className }: { className: string }) => (
  <div className={`absolute w-full h-full ${className}`} />
);

const AnimatedCubes = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-600/40 to-black z-0">
      <div className="fixed inset-0 overflow-hidden bg-black -z-10 perspective-1000">
        {/* SVG Filters for gradient effects */}
        <svg className="hidden">
          <defs>
            <linearGradient
              id="cube-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF3BFF" />
              <stop offset="33%" stopColor="#5542FF" />
              <stop offset="66%" stopColor="#51DDFF" />
              <stop offset="100%" stopColor="#32FF9E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Cubes */}
        <motion.div
          className="absolute w-[200px] h-[200px] left-[10%] top-[10%] z-10"
          animate={{
            rotateX: 360,
            rotateY: 360,
            z: [0, 20, 0],
          }}
          transition={{
            rotateX: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            rotateY: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            z: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative w-full h-full transform-style-preserve-3d">
            <CubeFace className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-80 transform translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-80 transform -translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-80 transform rotateY-90 translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-80 transform rotateY-90 -translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-80 transform rotateX-90 translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-80 transform rotateX-90 -translate-z-[100px]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[200px] h-[200px] right-[10%] top-[30%] z-10"
          animate={{
            rotateX: -360,
            rotateY: -360,
            z: [0, 20, 0],
          }}
          transition={{
            rotateX: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
            rotateY: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
            z: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative w-full h-full transform-style-preserve-3d">
            <CubeFace className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-70 transform translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-70 transform -translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-70 transform rotateY-90 translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-70 transform rotateY-90 -translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-70 transform rotateX-90 translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-70 transform rotateX-90 -translate-z-[100px]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[200px] h-[200px] left-[40%] top-[50%] z-10"
          animate={{
            rotateX: 360,
            rotateY: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotateX: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            rotateY: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative w-full h-full transform-style-preserve-3d">
            <CubeFace className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 transform translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 transform -translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 transform rotateY-90 translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 transform rotateY-90 -translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 transform rotateX-90 translate-z-[100px]" />
            <CubeFace className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 transform rotateX-90 -translate-z-[100px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCubes;