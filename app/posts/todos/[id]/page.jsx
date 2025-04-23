import React from "react";
import Link from "next/link";

async function getTodos(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
}

export default async function todoDetails({ params }) {
  const todo = await getTodos(params.id);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todos Detail</h1>
      <div className="space-y-2 text-lg">
        <p>
          <b>ID:</b> {todo.id}
        </p>
        <p>
          <b>Title:</b> {todo.title}
        </p>
        <p>
          <b>Completed:</b> {String(todo.completed)}
        </p>
      </div>
      <Link href="/posts/todos">
        <h1 className="text-xl absolute top-5 right-5 font-bold  hover:underline cursor-pointer">
          BACK TO TODOS
        </h1>
      </Link>
    </div>
  );
}
