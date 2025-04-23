import React from "react";
import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

export default async function UserDetails({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <div className="space-y-2 text-lg">
        <p>
          <b>ID:</b> {user.id}
        </p>
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
        <p>
          <b>Website:</b> {user.website}
        </p>
        <p>
          <b>Company:</b> {user.company?.name}
        </p>
        <p>
          <b>City:</b> {user.address?.city}
        </p>
      </div>
      <Link href="/posts/users">
        <h1 className="text-xl absolute top-5 right-5 font-bold  hover:underline cursor-pointer">
          BACK TO USERS
        </h1>
      </Link>
    </div>
  );
}
