import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="pt-40 pb-20">
      <div className="container mx-auto py-10">
        <div className="flex items-center max-lg:flex-wrap gap-10">
          <div className="flex flex-col gap-10 shrink-0">
            <Link href="#">
              <Image
                src="/assets/images/Logo.svg"
                height={42}
                width={162}
                alt="Logo"
              />
            </Link>
            <p className="text-xs text-grey max-w-[300px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="text-xs text-grey mt-auto">All rights reserved.</p>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-2 gap-10 lg:mx-auto shrink-0 max-w-[642px] w-full">
            <div className="flex flex-col gap-8">
              <p className="text-sm font-bold">Landings</p>
              <Link href="#" className="text-sm text-grey font-normal">
                Home
              </Link>
              <Link href="#" className="text-sm text-grey font-normal">
                Products
              </Link>
              <Link href="#" className="text-sm text-grey font-normal">
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-sm font-bold">Company</p>
              <Link href="#" className="text-sm text-grey font-normal">
                Home
              </Link>
              <Link
                href="#"
                className="inline-flex gap-2 items-center text-sm text-grey font-normal"
              >
                Careers
                <span
                  className={cn(
                    "bg-green h-[30px] w-[70px] rounded-full inline-flex justify-center items-center text-dark-blue text-[13px] font-bold",
                    openSans
                  )}
                >
                  Hiring!
                </span>
              </Link>
              <Link href="#" className="text-sm text-grey font-normal">
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-sm font-bold">Resources</p>
              <Link href="#" className="text-sm text-grey font-normal">
                Blog
              </Link>
              <Link href="#" className="text-sm text-grey font-normal">
                Products
              </Link>
              <Link href="#" className="text-sm text-grey font-normal">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
