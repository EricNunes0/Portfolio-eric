import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext"

function BackgroundTriangle({duration}) {
    const { tema } = useContext(ThemeContext);
    const [top, setTop] = useState(Math.floor(Math.random() * 100));
    const [left, setLeft] = useState(Math.floor(Math.random() * 96) + 2);
    const [opacity, setOpacity] = useState(1);
    
    useEffect(() => {
        const intervalo = setInterval(() => {
            setTimeout(() => {
                setOpacity(1);
            }, (duration / 2) * 1000);
            setTimeout(() => {
                setOpacity(0);
                setTimeout(() => {
                    setTop(Math.floor(Math.random() * 96));
                    setLeft(Math.floor(Math.random() * 96));
                }, 400);
            }, duration * 1000);
        }, duration * 1000);
  
        return () => clearInterval(intervalo);
    }, []);

    return (
        <object className={`background-triangles ${tema}`} data="svgs/star.svg" style={{
            animationDuration: `${duration}s`,
            top: `${top}%`,
            left: `${left}%`,
            opacity: opacity
        }}></object>
    )
}

export default function BackgroundTriangles({amount}) {
    let triangles = [];
    for(let i = 0; i <= amount - 1; i++) {
        let triangleAnimationDuration = 2 + Math.floor(Math.random() * 5);
        let triangle = BackgroundTriangle({duration: triangleAnimationDuration});
        triangles.push(triangle);
    };
    return (
        triangles
    )
};

