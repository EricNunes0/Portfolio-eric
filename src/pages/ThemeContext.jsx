import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const temasDisponiveis = ["light", "dark", "red", "blue"];

export const ThemeProvider = ({children}) => {
    const [tema, setTema] = useState("light");

    useEffect(() => {
        const temaSalvo = localStorage.getItem("theme");
        if (temaSalvo && temasDisponiveis.includes(temaSalvo)) {
        setTema(temaSalvo);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", tema);
    }, [tema]);

    return (
        <ThemeContext.Provider value={{ tema, setTema, temasDisponiveis }}>
            <div className={`theme-provider ${tema}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    );
};
