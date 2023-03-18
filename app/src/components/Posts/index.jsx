import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post";

export default function Posts() { 
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      {posts.map((item) => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  );
}
