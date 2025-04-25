"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="flex flex-wrap w-full m-auto items-center justify-center gap-4 p-4">
      {products.map((card) => (
        <Link href={`/posts/cards/${card.id}`}>
          <div
            key={card.id}
            className="border  rounded border-transparent hover:border-gray-300 hover:scale-[1.010] hover:shadow-[0_0_20px_3px_rgba(128,128,128,0.259)] transition  p-4 w-[285px] h-[400px] shadow-md bg-white"
          >
            <div className="flex items-center bg-gray-100 rounded justify-center ">
              <img src={card.thumbnail} alt="" />
            </div>
            <div className="flex flex-col py-2 mt-3">
              <h2 className="text-gray-600 text-[16px]">{card.title}</h2>
              <p className="font-semibold  text-green-600">${card.price}</p>
              <h3 className="flex items-center gap-1">
                <FaStar size={17} color="gold" /> {card.rating}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
