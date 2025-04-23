"use client";

import React from "react";
import { useParams } from "next/navigation";

const post = () => {
  const { id } = useParams();
  console.log(id);

  return <div>post {id}</div>;
};

export default post;
