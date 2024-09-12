import BlogDetails from "@/components/ui/BlogDetails";
import type { IBlog } from "@/types/indes";
import React from "react";

type TBlogDetailsParams = {
  params: {
    blogId: string;
  };
};

//First 3 blog will be cache as static and rest blogs will be Server side rendering
export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: IBlog) => {
    blogId: blogs.id;
  });
};

const BlogDetailsInfo = async ({ params }: TBlogDetailsParams) => {
  console.log(params);
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  console.log(blog);
  return (
    <div>
      <div className="my-10">
        <BlogDetails blog={blog}></BlogDetails>
      </div>
    </div>
  );
};

export default BlogDetailsInfo;
