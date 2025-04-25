import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm space-y-5">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Links
        </h1>

        <Link
          href="/posts/users"
          className="block w-full border border-gray-300 rounded-xl px-5 py-3 text-center text-lg hover:text-black text-gray-400 hover:border-black hover:bg-gray-100 transition"
        >
          USERS
        </Link>

        <Link
          href="/posts/comments"
          className="block w-full border border-gray-300 rounded-xl px-5 py-3 text-center text-lg hover:text-black text-gray-400 hover:border-black hover:bg-gray-100 transition"
        >
          COMMENTS
        </Link>
        <Link
          href="/posts/albums"
          className="block w-full border border-gray-300 rounded-xl px-5 py-3 text-center text-lg hover:text-black text-gray-400 hover:border-black hover:bg-gray-100 transition"
        >
          ALBUMS
        </Link>

        <Link
          href="/posts/todos"
          className="block w-full border border-gray-300 rounded-xl px-5 py-3 text-center text-lg hover:text-black text-gray-400 hover:border-black hover:bg-gray-100 transition"
        >
          TODOS
        </Link>

        <Link
          href="/posts/post"
          className="block w-full border border-gray-300 rounded-xl px-5 py-3 text-center text-lg hover:text-black text-gray-400 hover:border-black hover:bg-gray-100 transition"
        >
          POSTS
        </Link>
        <Link
          href="/posts/cards"
          className="block w-full border border-gray-300 rounded-xl px-5 py-3 text-center text-lg hover:text-black text-gray-400 hover:border-black hover:bg-gray-100 transition"
        >
          CARDS
        </Link>
      </div>
    </div>
  );
}
