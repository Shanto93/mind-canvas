import LoadingCard from "@/components/ui/LoadingCard";
import type { IBlog } from "@/types/indes";
import React from "react";

const BlogsLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div className="grid grid-cols-3 gap-8">
      {blogs.map((blog: IBlog) => (
        <LoadingCard key={blog.id}></LoadingCard>
      ))}
    </div>
  );
};

export default BlogsLoadingPage;
