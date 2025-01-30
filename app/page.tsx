import StockPrice from "@/components/Landing/StockPrice";
import BlogCard from "@/components/Landing/BlogCard"

export default async function Home() {

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
    <StockPrice ticker="TSLA" />
    <StockPrice ticker="AAPL" />
    </div>
    </div>
    <p>Resources</p>
      <BlogCard />
    </div>
  )
}
