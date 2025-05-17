import React, { createContext, useState, useEffect } from "react";
import changePageIcon from "../scripts/changePageIcon";

export const ThemeContext = createContext();

const temasDisponiveis = ["light", "dark", "red", "orange", "yellow", "green", "blue", "purple"];

export const ThemeProvider = ({children}) => {
    const [tema, setTema] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        const temaSalvo = localStorage.getItem("theme");
        if (temaSalvo && temasDisponiveis.includes(temaSalvo)) {
            document.documentElement.style.setProperty(`--base-color`, `var(--theme-${temaSalvo}-color)`);
            document.documentElement.style.setProperty(`--base-filter`, `var(--theme-${temaSalvo}-filter)`);
            setTema(temaSalvo);
            changePageIcon({url: `svgs/planets/${temaSalvo}.svg`});
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
