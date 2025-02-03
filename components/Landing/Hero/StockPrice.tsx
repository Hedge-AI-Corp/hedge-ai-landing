// app/components/StockPrice.tsx
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StockPriceProps {
  ticker: string;
}

export default function StockPrice({ ticker }: StockPriceProps) {
  const [symbol, setSymbol] = useState(ticker);

  const { data, isLoading, error } = useQuery({
    queryKey: ['stock', symbol],
    queryFn: async () => {
      const response = await fetch(`/api/stocks?symbol=${symbol}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
    // Updated options
    staleTime: 3600000, // Consider data fresh for 1 hour
    gcTime: 24 * 3600000, // Keep unused data in cache for 24 hours
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false // Don't retry on failure
  
  });

  const priceChange = data?.results?.[0]?.c - data?.results?.[0]?.o;
  const changePercent = ((priceChange || 0) / (data?.results?.[0]?.o || 1)) * 100;
  const isPositive = priceChange > 0;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg px-6 border border-gray-100 m-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{symbol}</h2>
          <p className="text-sm text-gray-500 mt-1">US Market</p>
        </div>
        {data && data.results && data.results.length > 0 && (
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">
              ${data.results[0].c?.toFixed(2)}
            </div>
            <div className={`flex items-center justify-end text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              <span className="ml-1">
                {Math.abs(changePercent).toFixed(2)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}