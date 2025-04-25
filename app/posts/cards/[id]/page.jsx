import React from "react";
import Link from "next/link";

async function getCards(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function cardDetails({ params }) {
  const card = await getCards(params.id);

  return (
    <div className="p-8  mx-auto">
      <h1 className="text-2xl font-bold mb-4">Card Data</h1>
      <div className="flex border border-gray-400 rounded p-8 w-250 justify-center mx-auto items-start ">
        <div className="forimg ">
          <img src={card.thumbnail} alt="" />
        </div>
        <div className="flex flex-col text">
          <p className="text-gray-600">
            {" "}
            ID: <span className="text-black">{card.id}</span>
          </p>
          <p className="text-gray-600">
            Title: <span className="text-black">{card.title}</span>
          </p>

          <p className="text-gray-600">
            Category: <span className="text-black">{card.category}</span>
          </p>
          <p className="max-w-[500px] text-gray-600">
            Description: <span className="text-black">{card.description}</span>
          </p>

          <p className="text-gray-600">
            price: <span className="text-black">{card.price}</span>
          </p>
        </div>
      </div>
      <Link href="/posts/cards">
        <h1 className="text-xl absolute top-5 right-5 font-bold  hover:underline cursor-pointer">
          BACK TO CARDS
        </h1>
      </Link>
    </div>
  );
}
