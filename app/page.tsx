import { NavbarWithMenu } from "@/components/nav";
import Image from "next/image";
import HedgeAIIcon from "@/public/hedge-ai-logo.svg";
import AuthButtons from "@/components/nav/authButtons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-16 flex items-center justify-evenly bg-gray-800">
      {/* @ciaranjmcg0v: Logo Link to redirect to homepage */}
      <Link href="/" passHref>
        {/* @ciaranjmcg0v: Icon - Used SVG that was generated but can be replaced if required */}
        <Image
          src={HedgeAIIcon}
          alt="Hedge AI icon"
          width={50}
          height={50}
          className="object-cover"
        />
      </Link>

      {/* @ciaranjmcg0v: Navbar Menu with Dropdowns and links */}
      <NavbarWithMenu />

      {/* @ciaranjmcg0v: Auth Buttons */}
      <AuthButtons />
    </div>
  );
}
