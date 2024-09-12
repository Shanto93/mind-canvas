"use server";
import type { IBlog } from "@/types/indes";
import React from "react";
import { json } from "stream/consumers";

export const createBlog = async (data: IBlog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogInfo = await res.json();
  return blogInfo;
};

export default createBlog;
