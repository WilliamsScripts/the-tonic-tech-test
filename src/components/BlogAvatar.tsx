import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type TBlogAvatarProps = {
  name: string;
  initials: string;
  imageUrl: string;
  className?: HTMLProps<HTMLElement>["className"];
};

const BlogAvatar: React.FC<TBlogAvatarProps> = ({
  name,
  initials,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={imageUrl} alt="@shadcn" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <p className="text-xs">{name}</p>
    </div>
  );
};

export default BlogAvatar;
