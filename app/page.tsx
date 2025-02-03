// import Banner from "@/components/Landing/Banner";
import Link from "next/link";
import NavbarMenu from "@/components/navbar";
import Image from "next/image";
import HedgeAiIcon from "@/public/file.svg";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Landing/Hero/Hero";

export default async function Home() {
  return (
    <div className="relative w-full h-screen  overflow-y-scroll z-0">
      {/* <Banner /> */}

      {/* Added a new navbar with your specifications. Let me know what you think */}
      <div className="flex items-center justify-evenly h-16 sticky top-0 z-50 bg-gray-800">
        {/* Nav Icon */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src={HedgeAiIcon}
            alt="Hedge Ai Icon"
            height={40}
            width={40}
            className="object-cover rounded-full"
          />
          <h3 className="text-xl text-white">Hedge AI</h3>
        </Link>

        {/* Nav Menu with Dropdowns */}
        <NavbarMenu />

        {/* Links */}
        <Button variant="default">Join the Waitlist</Button>
      </div>

      {/* Hero */}
      <Hero />
    </div>
  );
}
