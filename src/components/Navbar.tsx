"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => setShowSidebar((prev) => !prev);
  return (
    <nav>
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="#">
            <Image
              src="/assets/images/Logo.svg"
              height={42}
              width={162}
              alt="Logo"
            />
          </Link>

          <button
            type="button"
            className="hidden max-md:block"
            onClick={handleSidebar}
          >
            <Menu height={30} width={30} />
          </button>

          <div
            className={cn(
              "animate z-10 max-md:fixed relative max-md:top-0 max-md:h-screen max-md:w-screen max-md:flex-col max-md:bg-white flex items-center justify-end max-md:justify-center gap-10",
              showSidebar ? "max-md:left-0" : "max-md:-left-full"
            )}
          >
            <button
              type="button"
              onClick={handleSidebar}
              className="max-md:block hidden absolute top-7 right-7"
            >
              <X height={30} width={30} />
            </button>
            <Link
              href="#"
              className={cn(
                "text-dark-blue text-xs font-semibold",
                openSans.className
              )}
            >
              Product
            </Link>
            <Link
              href="#"
              className={cn(
                "text-dark-blue text-xs font-semibold",
                openSans.className
              )}
            >
              Services
            </Link>
            <Link
              href="#"
              className={cn(
                "text-dark-blue text-xs font-semibold",
                openSans.className
              )}
            >
              About
            </Link>
            <Link
              href="#"
              className={cn(
                "inline-flex justify-center items-center text-dark-blue text-xs h-10 w-32 rounded-full border-2 border-dark-blue font-bold",
                openSans.className
              )}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
