"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import type { IBlog } from "@/types/indes";
import React from "react";
import LoadingPage from "../loading";

const Blogs = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery("");
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div className="my-10">
          <h2 className="text-3xl font-semibold text-center">MindCanvas</h2>
          <p className="text-center w-2/4 mx-auto mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga at
            hic ut, suscipit aliquam natus autem odit delectus
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 my-10">
          {blogs?.map((blog: IBlog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
