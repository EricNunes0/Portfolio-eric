import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSelector = ({id, theme}) => {
	const { tema, setTema, temasDisponiveis } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	return (
		<div class = "theme-selector-div" id={id}>
			<div id="theme-selector-flex">
				<button className="flex-center" id="theme-button" onMouseEnter={() => {setOpen(true)}} onMouseLeave={() => {setOpen(false)}}>
					<img id="theme-icon" src={`svgs/planets/${tema}.svg`}></img>
				</button>
				{/*<select id="tema" value={tema} onChange={(e) => setTema(e.target.value)}>
					{temasDisponiveis.map((t) => (
						<option key={t} value={t}>
							{t.charAt(0).toUpperCase() + t.slice(1)}
						</option>
					))}
				</select>*/}
				<div className={`${open ? "open" : "closed"} ${tema}`} id="theme-menu" onMouseEnter={() => {setOpen(true)}} onMouseLeave={() => {setOpen(false)}}>
					{temasDisponiveis.map((tema) => (
						<button className={`theme-options ${theme}`} onClick={() => {setTema(tema)}}>
							<img className="theme-options-icons" src={`svgs/planets/${tema}.svg`}></img>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThemeSelector;