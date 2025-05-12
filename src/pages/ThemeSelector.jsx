import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSelector = ({id, theme, mobile}) => {
	const { tema, setTema, temasDisponiveis } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	return (
		<div class = "theme-selector-div" id={id}>
			<div id="theme-selector-flex">
				<button className="flex-center" id="theme-button"
					onMouseEnter={() => {if(mobile==false) {setOpen(true)}}}
					onMouseLeave={() => {if(mobile==false) {setOpen(false)}}}
					onClick={() => {if(mobile==true) {setOpen(!open)}}}>
					<div id="theme-icon" style={{backgroundImage: `url(svgs/planets/${tema}.svg)`}}></div>
				</button>
				<div className={`${open ? "open" : "closed"} ${mobile ? "mobile" : "desktop"} ${tema} theme-menu`}
					onMouseEnter={() => {if(mobile==false) {setOpen(true)}}}
					onMouseLeave={() => {if(mobile==false) {setOpen(false)}}}>
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