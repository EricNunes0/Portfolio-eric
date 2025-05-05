import languegesJSON from "../../jsons/languages.json";

export default function ModalLangs({theme, project}) {
    const languages = languegesJSON;
    let rows = [];
    if(Object.keys(project).length > 0 >= 1) {
        project.languages.forEach((lang) => {
            rows.push(
                <div className = "modal-langs-divs">
                    <div className = "modal-langs-icons-divs">
                        <img className = {`modal-langs ${theme}`} src = {`${languages[lang].icon}`} alt = {`${lang}`}></img>
                    </div>
                    <div className = "modal-langs-names-divs hide">
                        <span className = "modal-lang-names light">{lang}</span>
                    </div>
                </div>
            );
        });
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "8px"}}>
            {rows}
        </div>
    );
};