import StockPrice from "@/components/Landing/StockPrice";
import BlogCard from "@/components/Landing/BlogCard";
import Banner from "@/components/Landing/Banner";
import Link from "next/link";
import Footer from "@/components/Landing/Footer";

export default async function Home() {
  return (
    <div>
      <Banner />
      <div className="text-2xl">Hedge AI Landing Page</div>
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
      <Link href="/terms-of-service">
        <p className="underline-offset-1 text-blue-500">Terms of Service</p>
      </Link>
      <Link href="/privacy-policy">
        <p className="underline-offset-1 text-blue-500">Privacy Policy</p>
      </Link>
      <div>
        <Link href="/investor-contact">Investor Form</Link>
      </div>

      <Footer />
    </div>
  );
}
