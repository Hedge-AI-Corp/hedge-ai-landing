import StockPrice from "@/components/StockPrice";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
    <div className="text-2xl">
      Hedge AI Landing Page
    </div>
    <div>
      Today's Stocks
    <div className="grid grid-cols-3">
    <StockPrice ticker="NVDA" />
    <StockPrice ticker="GOOGL" />
    <StockPrice ticker="AAPL" />
    </div>
    </div>
    </div>
  )
}
