import Link from "next/link";
import React from "react";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-6 py-3 text-left">ID</th>
              <th className="border px-6 py-3 text-left">Name</th>
              <th className="border px-6 py-3 text-left">Username</th>
              <th className="border px-6 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-6 py-2">{user.id}</td>
                <td className="border px-6 py-2 text-blue-600">
                  <Link href={`/posts/users/${user.id}`}>{user.name}</Link>
                </td>
                <td className="border px-6 py-2">{user.username}</td>
                <td className="border px-6 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/">
        <h1 className="text-xl absolute top-5 right-5 font-bold  hover:underline cursor-pointer">
          BACK TO LINKS
        </h1>
      </Link>
    </div>
  );
}
