"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChartLine, 
  Bot, 
  LineChart, 
  Timer,
  BookOpen,
  Video,
  Newspaper,
  Podcast
} from "lucide-react";

const features = [
  {
    name: "AI Trading",
    description: "Advanced algorithms for automated trading",
    icon: ChartLine,
  },
  {
    name: "Smart Portfolio",
    description: "AI-powered portfolio management",
    icon: Bot,
  },
  {
    name: "Real-time Analytics",
    description: "Live market analysis and insights",
    icon: LineChart,
  },
  {
    name: "Quick Execution",
    description: "Fast and reliable trade execution",
    icon: Timer,
  },
];

const resources = [
  {
    name: "Case Studies",
    description: "How we've helped others grow",
    icon: BookOpen,
  },
  {
    name: "Blog",
    description: "Latest insights and updates",
    icon: Newspaper,
  },
];

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: "Features", hash: "/features", dropdownItems: features },
    { name: "Resources", hash: "/resources", dropdownItems: resources },
    { name: "Invest", hash: "/investor-contact" },
    { name: "Contact", hash: "/contact" },
  ];

  const Dropdown = ({ items }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-2 p-4">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ x: 4 }}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <div className="mt-1 p-2 bg-gray-800 rounded-lg">
              <item.icon className="w-4 h-4 text-gray-200" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-200">{item.name}</h3>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Hedge AI Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-semibold text-xl text-white">Hedge AI</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.hash}
                className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === link.name
                    ? "text-white font-medium bg-gray-800"
                    : "text-white hover:text-gray-200 hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
              <AnimatePresence>
                {hoveredLink === link.name && link.dropdownItems && (
                  <Dropdown items={link.dropdownItems} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Waitlist Button */}
        <Button
          className="rounded-lg text-sm bg-white text-black hover:bg-gray-200 transition-colors"
        >
          Join the waitlist
        </Button>
      </nav>
    </header>
  );
}
