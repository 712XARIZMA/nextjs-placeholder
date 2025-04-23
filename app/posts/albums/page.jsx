import Link from "next/link";
import React from "react";

async function fetchAlbums() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  return res.json();
}

export default async function albumsPage() {
  const albums = await fetchAlbums();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 ">Albums</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="border px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album, index) => (
              <tr key={album.id}>
                <td className="border px-6 py-2">{album.id}</td>
                <td className="border px-6 py-2 ">{album.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/">
        <h1 className="text-xl absolute top-5 right-5 font-bold hover:underline cursor-pointer">
          BACK TO LINKS
        </h1>
      </Link>
    </div>
  );
}
