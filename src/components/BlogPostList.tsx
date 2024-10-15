import { cn } from "@/lib/utils";
import React from "react";
import BlogPost from "./BlogPost";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const BlogPostList = () => {
  return (
    <section className="p-20 max-xl:px-0">
      <h2 className="text-2xl text-black mb-7">Latest news</h2>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-12 max-xl:gap-x-6">
        {BLOG_POSTS.map((item, index) => (
          <BlogPost key={index} post={item} />
        ))}
        <div className="col-span-full text-center mt-7">
          <button
            type="button"
            className={cn(
              "inline-flex justify-center items-center text-dark-blue text-sm h-[60px] w-[219px] rounded-full border-2 border-dark-blue font-bold",
              openSans.className
            )}
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPostList;
