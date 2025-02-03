import StockPrice from "@/components/Landing/Hero/StockPrice";
import Link from "next/link";
import AnimatedCubes from "./AnimatedCubes";
import Image from "next/image";
import { Send } from "lucide-react";

function Hero() {
  return (
    <>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Main gradient overlay */}
        <AnimatedCubes />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full w-full flex flex-col items-center justify-center space-y-8">
        <div className="p-16 border border-gray-300 rounded-lg">
          {/* Call to action form for waitlist */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Hedge AI</h1>
            <p className="text-white text-2xl">
              Hedge AI is a platform that helps you make better investment
              decisions by providing you with real-time data and insights.
            </p>
            <div className="flex items-center space-x-4 border border-gray-200 rounded-lg p-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-12 py-3 rounded-lg pl-4 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Send className="text-gray-400" />
                </div>
              </div>
              <Link href="/signup" legacyBehavior>
                <a className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                  Join the Waitlist
                </a>
              </Link>
            </div>
          </div>

          {/* Live Stocks */}
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Live Stocks
            </h1>
            <div className="overflow-hidden whitespace-nowrap flex space-x-4 justify-center">
              <StockPrice ticker="NVDA" />
              <StockPrice ticker="GOOGL" />
              <StockPrice ticker="TSLA" />
              <StockPrice ticker="AAPL" />
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="relative w-full flex justify-center">
            <Image
              src="https://cdn.dribbble.com/userupload/13798489/file/original-df156cc89929710e4f2c213e4a77bdb2.jpg?resize=752x&vertical=center"
              alt="Stock Data Dashboard"
              width={1000}
              height={1000}
              className="object-cover rounded-lg absolute top-[30%]"
            />
          </div>
        </div>

        {/* Footer - To be moved to dedicated component */}
        <div className="flex items-center w-full justify-center space-x-6 mt-8">
          <div>
            <Link href="/terms-of-service" legacyBehavior>
              <a className="underline text-blue-500">Terms of Service</a>
            </Link>
          </div>
          <div>
            <Link href="/privacy-policy" legacyBehavior>
              <a className="underline text-blue-500">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
