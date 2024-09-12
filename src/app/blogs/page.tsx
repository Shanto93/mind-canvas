import BlogCard from "@/components/ui/BlogCard";
import type { IBlog } from "@/types/indes";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
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
          {blogs.map((blog: IBlog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
