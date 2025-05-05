import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

export default function TypingAnimation({className, text, delay, interval}) {
    const palavra = text;
    const [texto, setTexto] = useState("");
    const [index, setIndex] = useState(0);
    const [iniciou, setIniciou] = useState(false);

    useEffect(() => {
        const delayInicial = setTimeout(() => {
        setIniciou(true);
        }, delay * 1000); // 2 segundos = 2000ms

        return () => clearTimeout(delayInicial);
    }, []);

    useEffect(() => {
        if (!iniciou || index >= palavra.length) return;

        const intervalo = setTimeout(() => {
        setTexto((prev) => prev + palavra[index]);
        setIndex((prev) => prev + 1);
        }, interval * 1000); // digita a cada segundo

        return () => clearTimeout(intervalo);
    }, [index, iniciou, palavra]);

    return <h1 className={className}>{texto}</h1>;
}