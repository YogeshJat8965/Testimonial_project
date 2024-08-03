import React, { useState } from "react";
import Card from "./Card.js";
import './Testimonial.css';
import { TbMathGreater } from "react-icons/tb";
import { LiaLessThanSolid } from "react-icons/lia";

export default function Testimonial({ reviews }) {

    const [index, setIndex] = useState(0);

    function backIndex() {
        if (index - 1 < 0) {
            setIndex(4);
        } else {
            setIndex(index - 1);
        }
    }

    function forwardIndex() {
        if (index + 1 > 4) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randmIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randmIndex);
    }

    return (
        <div className="testimonial-container">
            <Card review={reviews[index]} />
            <div className="testimonial-controls">
                <button onClick={backIndex}>
                    <LiaLessThanSolid />
                </button>
                <button onClick={forwardIndex}>
                    <TbMathGreater />
                </button>
            </div>
            <div>
                <button className="surprise-button" onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    );
}
