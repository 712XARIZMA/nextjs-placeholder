import React from "react";
import Link from "next/link";

async function getComment(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  return res.json();
}

export default async function commentDetails({ params }) {
  const comment = await getComment(params.id);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Comment Data</h1>
      <div className="space-y-2 text-lg">
        <p>
          <b>ID:</b> {comment.id}
        </p>
        <p>
          <b>Name:</b> {comment.name}
        </p>

        <p>
          <b>Email:</b> {comment.email}
        </p>
        <p>
          <b>Body:</b> {comment.body}
        </p>
      </div>
      <Link href="/posts/comments">
        <h1 className="text-xl absolute top-5 right-5 font-bold  hover:underline cursor-pointer">
          BACK TO COMMENTS
        </h1>
      </Link>
    </div>
  );
}
