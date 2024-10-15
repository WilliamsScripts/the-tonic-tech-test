import React from "react";
import BlogAvatar from "./BlogAvatar";
import BlogTime from "./BlogTime";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <>
      <div className="py-10 text-center">
        <p className={cn("text-sm text-dark-blue", openSans.className)}>Blog</p>
        <h1 className="text-3xl text-dark-blue">Thoughts and words</h1>
      </div>
      <div className="flex max-lg:flex-wrap items-center gap-20 py-14">
        <div className="relative w-full max-w-[550px] h-[386px] mx-auto">
          <Image src="/assets/images/blog/1.svg" fill alt="blog image" />
        </div>
        <div>
          <BlogTime />
          <h2 className="text-2xl mb-5">
            Pitch termsheet backing validation focus release.
          </h2>
          <BlogAvatar
            imageUrl="/assets/images/author/author-1.svg"
            name="Chandler Bing"
            initials="CB"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
