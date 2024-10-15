import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import React, { HTMLProps } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

type TBlogTime = {
  className?: HTMLProps<HTMLElement>["className"];
};
const BlogTime: React.FC<TBlogTime> = ({ className }) => {
  return (
    <p
      className={cn(
        openSans.className,
        "flex items-center gap-3 font-bold text-dark-blue",
        className
      )}
    >
      Category
      <span className="text-grey font-normal">November 22, 2021</span>
    </p>
  );
};

export default BlogTime;
