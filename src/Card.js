import React from "react";
import "./Card.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function Card({ review }) {
  return (
    <div className="flex flex-col md:relative   ">
      <div className=" top-[3rem] mx-auto left-[8.5rem]  ">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px]   "
          src={review.image}
        ></img>
        <div className="w-[140px] h-[140px] rounded-full bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px] "></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
      </div>

      <div className="text-center mt-7">
        <p className="text-violet-400 uppercase text-md">{review.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div className="text-center mx-3 mt-4 text-slate-500">{review.text}</div>
      <div className="text-violet-400 mx-auto px-[50px] mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
}
