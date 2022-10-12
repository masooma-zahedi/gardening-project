
import React, { useState, useEffect } from 'react';
import { Button } from 'bootstrap';

const BackToTopButton = ()=>{
    const[backToTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
                console.log(backToTopButton);
            } else{
                setBackToTopButton(false)
            }
        })
    },[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <>
            {backToTopButton && (
             <button
                style={{
                    position:"fixed",
                    width:"40px",
                    height:"40px",
                    fontSize:"40px",
                    bottom:"50px",
                    right:"50px",
                    backgroundColor:"#2cb035",
                    borderRadius:"10px",
                    lineHeight:"40px",
                    color:"#fff",
                    border:"none",                    
                }}
                onClick={scrollUp}
            > ^ </button>
            )
            }
        </>
    )
}

export default BackToTopButton;