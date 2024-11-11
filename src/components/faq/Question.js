import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Question({ title, answer }) {

    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        AOS.init({
          duration: 1000,
        })
      }, [])

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }
    return (
        <div className='container question' data-aos="fade-left" >
            <div className='question-title'>
                <h2>{title}</h2>
                <button onClick={handleClick}>
                    <AiOutlinePlus color='#1f93ff' />
                </button>
            </div>
            <div className='question-answer'>
                {
                    showAnswer && <p>{answer}</p>
                }
            </div>
        </div>
    )
}

export default Question