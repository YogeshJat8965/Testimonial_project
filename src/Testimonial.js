import React, { useState } from "react";
import Card from "./Card.js"
import './Testimonial.css';
import { TbMathGreater } from "react-icons/tb";
import { LiaLessThanSolid } from "react-icons/lia";


export default function Testimonial({ reviews }) {

    const[index,setIndex] = useState(0);

    function backIndex(){

        if(index - 1 < 0){
            setIndex(4);
        }
        else{
            setIndex(index-1);
        }
    }
    function forwardIndex(){
        if(index + 1 > 4){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function supriseHandler(){
        let randmIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randmIndex);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10
         transition-all duration-500 hover:shadow-2xl rounded-lg " >
           <Card review={reviews[index]} ></Card> 
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto  " >
                <button className="cursor-pointer hover:text-violet-800" onClick={backIndex} >
                    <LiaLessThanSolid></LiaLessThanSolid>
                </button>
                <button className="cursor-pointer hover:text-violet-800" onClick={forwardIndex} >
                    <TbMathGreater></TbMathGreater>
                </button>
            </div>
            <div className="mt-6" >
                <button className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer 
                    px-10 py-2 rounded-md font-bold text-white text-lg" onClick={supriseHandler} >
                    Suprise Me
                </button>
            </div>



        </div>
    );

}