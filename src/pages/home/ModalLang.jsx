import { useState } from "react";
import languegesJSON from "../../jsons/languages.json";

export default function ModalLang({theme, lang}) {
    let animationDuration = 3;
    const languages = languegesJSON;
    const [hide, setHide] = useState(true);
    const [langIconDivRunning, setLangIconDivRunning] = useState(false);
    const [langIconDivAnimation, setLangIconDivAnimation] = useState(``);
    const [langAnimationPlayState, setLangAnimationPlayState] = useState(`paused`);
    return (
        <div className = "modal-langs-divs"
            onMouseEnter={() => {setHide(false);}}
            onMouseLeave={() => {setHide(true);}}
            onClick={() => {
                setLangIconDivRunning(true);
                setLangIconDivAnimation(`ModalLangFly ${animationDuration}s ease-in-out`);
                setLangAnimationPlayState(`running`);
                setTimeout(function() {
                    setLangIconDivRunning(false);
                    setLangIconDivAnimation(``);
                    setLangAnimationPlayState(`paused`);
                }, animationDuration * 1000);
            }}
        >
            <div className = {`modal-langs-icons-divs ${langIconDivRunning == true ? `running`: ``}`}>
                <img className = {`modal-langs ${theme}`} src = {`${languages[lang].icon}`} alt = {`${lang}`}
                    style={{
                        animation: langIconDivAnimation,
                        animationPlayState: langAnimationPlayState
                    }}
                ></img>
            </div>
            <div className = {`modal-langs-names-divs ${hide == true ? `hide` : ``}`}>
                <span className = "modal-lang-names light">{languages[lang].name}</span>
            </div>
        </div>
    );
};