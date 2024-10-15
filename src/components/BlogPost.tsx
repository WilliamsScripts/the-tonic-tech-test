import Image from "next/image";
import React from "react";
import BlogTime from "./BlogTime";
import BlogAvatar from "./BlogAvatar";
import { TBlog } from "@/data/blog-posts";

type BlogPostProps = {
  post: TBlog;
};
const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="relative h-full flex flex-col gap-5">
      <div className="relative h-[209px] w-full rounded-[12px] overflow-hidden">
        <Image
          src={post.blogImage}
          className="object-cover"
          fill
          alt="blog image"
        />
      </div>
      <BlogTime />
      <p className="text-sm">{post.title}</p>
      <BlogAvatar
        className="mt-auto"
        imageUrl={post.author.imageUrl}
        name={post.author.name}
        initials={post.author.initals}
      />
    </div>
  );
};

export default BlogPost;
