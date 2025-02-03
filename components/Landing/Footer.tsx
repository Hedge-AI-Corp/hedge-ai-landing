import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 space-y-4">
          <div className="flex flex-col justify-between py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.svg"
                alt="Hedge AI Logo"
                width={32}
                height={32}
                className="rounded-full mr-4"
              />
              <span className="font-extrabold text-xl text-white">
                Hedge AI
              </span>
            </Link>
            <p className="transition-colors duration-300 hover:text-gray-300">
              Your trusted AI companion for hedge fund management.
            </p>
            <span className="text-xs font-light">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>
          <div>
            <h3 className="text-lg font-extrabold mb-2">Features</h3>
            <ul className="space-y-4">
              <li className="font-light">
                <Link href="/ai-trading">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    AI Trading
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="/smart-portfolio">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Smart Portfolio
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="/analytics">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Real Time Analytics
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="/quick-execution">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Quick Execution
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-extrabold mb-2">Resources</h3>
            <ul className="space-y-4">
              <li className="font-light">
                <Link href="/blog">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Blog
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="/case-studies">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="/privacy">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Privacy Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-extrabold mb-2">Follow Us</h3>
            <ul className="space-y-4">
              <li className="font-light">
                <Link href="https://twitter.com">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Twitter
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="https://facebook.com">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Facebook
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="https://linkedin.com">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    LinkedIn
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-extrabold mb-2">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="font-light">
                <Link href="/contact">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li className="font-light">
                <Link href="/investor-contact">
                  <span className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:translate-x-1 inline-block">
                    Investor Enquiry
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
