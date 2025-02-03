"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface StockPriceProps {
  ticker: string;
}

export default function StockPrice({ ticker }: StockPriceProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stock", ticker],
    queryFn: async () => {
      const response = await fetch(`/api/stocks?symbol=${ticker}`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
    staleTime: 3600000,
    gcTime: 24 * 3600000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  });

  const priceChange = data?.results?.[0]?.c - data?.results?.[0]?.o;
  const changePercent = ((priceChange || 0) / (data?.results?.[0]?.o || 1)) * 100;
  const isPositive = priceChange > 0;

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl h-20 flex items-center justify-center rounded-xl bg-black/50 text-white shadow-lg">
        <span className="animate-pulse text-gray-500">Loading {ticker}...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-2xl h-20 flex items-center justify-center rounded-xl bg-black text-red-500 shadow-lg">
        Error loading {ticker}
      </div>
    );
  }

  return (
    <motion.div
      className="w-full max-w-2xl h-24 flex items-center justify-between px-8 rounded-xl bg-black shadow-lg text-white dark:bg-gray-950 border border-gray-800"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Ticker */}
      <h3 className="text-lg font-bold tracking-wide">{ticker}</h3>

      {/* Current Price */}
      <p className="text-3xl font-semibold">${data?.results?.[0]?.c?.toFixed(2)}</p>

      {/* Percentage Change */}
      <motion.div
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium ${
          isPositive ? "bg-green-700/20 text-green-400 border border-green-600 shadow-md" 
                    : "bg-red-700/20 text-red-400 border border-red-600 shadow-md"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        {isPositive ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
        <span>{Math.abs(changePercent).toFixed(2)}%</span>
      </motion.div>
    </motion.div>
  );
}

