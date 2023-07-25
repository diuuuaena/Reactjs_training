import { useState,useEffect } from "react";

function Time() {
    const [countdown,setCountdown] =useState(180)
    useEffect(() =>{
        const timerId=setInterval(() =>{            
            setCountdown(prev => prev-1)
        },1000)
        return () => clearInterval(timerId)
    },[countdown])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Time