import BlogDetails from "@/components/ui/BlogDetails";
import type { IBlog } from "@/types/indes";
import React from "react";

type TBlogDetailsParams = {
  params: {
    blogId: string;
  };
};

const BlogDetailsInfo = async ({ params }: TBlogDetailsParams) => {
  console.log(params);
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
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
