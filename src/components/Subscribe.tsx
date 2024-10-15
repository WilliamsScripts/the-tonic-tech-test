import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

const Subscribe = () => {
  return (
    <section className="relative min-h-[391px] bg-dark-blue px-4 py-14 rounded-[12px] overflow-hidden flex items-center justify-center">
      <Image
        src="/assets/images/Ellipse.svg"
        width={800}
        height={350}
        className="absolute top-0 object-cover right-0"
        alt="Ellipse"
      />
      <div className="relative max-w-[716px] text-center">
        <h2 className="text-2xl text-white mb-10">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex flex-wrap items-center gap-5 justify-center">
          <input
            type="text"
            className={cn(
              "h-[60px] w-full max-w-[370px] rounded-full text-sm placeholder:text-black px-8",
              openSans.className
            )}
            placeholder="Your email address"
          />
          <button
            type="button"
            className="h-[60px] w-[210px] bg-green rounded-full text-sm text-dark-blue font-bold"
          >
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
