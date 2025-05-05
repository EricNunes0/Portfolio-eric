import languagesJSON from "../../jsons/languages.json";
import KnowledgesLanguage from "./KnowledgesLanguage";

export default function KnowledgesLanguages({theme, languages}) {
    let divs = [];
    languages.forEach((language) => {
        if(languagesJSON[language]) {
            divs.push(<KnowledgesLanguage theme={theme} language={languagesJSON[language]}></KnowledgesLanguage>)
        };
    });
    return (
        <div className = "knowledges-code-languages-divs">
            {divs}
        </div>
    )
}