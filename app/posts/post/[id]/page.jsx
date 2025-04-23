import React from "react";
import Link from "next/link";

async function getPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function postsDetails({ params }) {
  const post = await getPosts(params.id);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Comment Data</h1>
      <div className="space-y-2 text-lg">
        <p>
          <b>ID:</b> {post.id}
        </p>
        <p>
          <b>Title:</b> {post.title}
        </p>

        <p>
          <b>Body:</b> {post.body}
        </p>
      </div>
      <Link href="/posts/post">
        <h1 className="text-xl absolute top-5 right-5 font-bold  hover:underline cursor-pointer">
          BACK TO POSTS
        </h1>
      </Link>
    </div>
  );
}
