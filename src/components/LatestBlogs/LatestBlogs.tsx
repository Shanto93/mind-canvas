import React from "react";
import BlogCard from "../ui/BlogCard";
import type { IBlog } from "@/types/indes";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = async ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div>
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center">MindCanvas</h2>
        <p className="text-center w-2/4 mx-auto mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga at hic
          ut, suscipit aliquam natus autem odit delectus
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
