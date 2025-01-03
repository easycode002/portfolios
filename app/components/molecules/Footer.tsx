"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "../atoms/Button";
import { IGIcon, YoutubeIcon } from "../atoms/Icon";
import { Twitter } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-8 flex flex-col items-center gap-6">
      <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold">
        MAB SOTHEA
      </h2>
      
      <nav>
        <ul className="flex gap-6 text-h5 font-ubunturegular">
          {[
            { href: "#about", label: "About" },
            { href: "#portfolio", label: "Projects" },
            { href: "#contact", label: "Services" }
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-gray-600 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="flex gap-4">
        {[
          { 
            href: "https://instagram.com", 
            icon: IGIcon, 
            label: "Instagram" 
          },
          { 
            href: "https://youtube.com", 
            icon: YoutubeIcon, 
            label: "YouTube" 
          },
          { 
            href: "https://twitter.com", 
            icon: Twitter, 
            label: "Twitter" 
          }
        ].map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-gray-600 transition-colors"
          >
            <Icon
              width={32}
              height={32}
              className="hover:text-[#05C7AE] duration-150 hover:scale-105"
            />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>

      <div className="flex text-gray-500 flex-row text-subtitle space-x-2 font-ubunturegular pt-4">
        <div className="flex flex-row space-x-2">
          <span>©</span> <h2>EasyCode.</h2>
        </div>
        <h2> All rights reserved</h2>
      </div>

      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 rounded-2xl bg-[#05C7AE] hover:bg-[#05C7AE]"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-4 h-4 text-white" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </footer>
  );
}