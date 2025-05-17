import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import changePageIcon from "../scripts/changePageIcon";

const ThemeSelector = ({id, theme, mobile}) => {
	const { tema, setTema, temasDisponiveis } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	return (
		<div class = "theme-selector-div" id={id}>
			<div id="theme-selector-flex">
				<button className="flex-center" id="theme-button"
					onMouseEnter={() => {if(mobile==false) {setOpen(true)}}}
					onMouseLeave={() => {if(mobile==false) {setOpen(false)}}}
					onClick={() => {if(mobile==true) {setOpen(!open);}}}>
					<div id="theme-icon" style={{backgroundImage: `url(svgs/planets/${tema}.svg)`}}></div>
				</button>
				<div className={`${open ? "open" : "closed"} ${mobile ? "mobile" : "desktop"} ${tema} theme-menu`}
					onMouseEnter={() => {if(mobile==false) {setOpen(true)}}}
					onMouseLeave={() => {if(mobile==false) {setOpen(false)}}}>
					{temasDisponiveis.map((tema) => (
						<button className={`theme-options ${theme}`}
							onClick={() => {
								const themeButton = document.querySelector("#theme-button");
								setTema(tema);
								changePageIcon({url: `svgs/planets/${tema}.svg`});
								document.documentElement.style.setProperty(`--base-color`, `var(--theme-${tema}-color)`);
								document.documentElement.style.setProperty(`--base-filter`, `var(--theme-${tema}-filter)`);
								themeButton.style.transform = "scale(0) rotate(360deg)";
								setTimeout(function() {
									themeButton.style.transform = "scale(1) rotate(0deg)";
								}, 500);
							}}
						>
							<img className="theme-options-icons" src={`svgs/planets/${tema}.svg`}></img>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThemeSelector;