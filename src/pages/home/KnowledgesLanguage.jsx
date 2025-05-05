export default function KnowledgesLanguage({theme, language}) {
    return (
        <div className = {`knowledges-language-divs ${theme}`}>
            <div className = "knowledges-language-icon-divs">
                <img className = {`knowledges-languages-icons ${theme}`} src = {language.icon} alt = {language.name}></img>
            </div>
            <div className = "knowledges-language-name-divs">
                <p className = {`knowledges-languages-names ${theme}`}>{language.name}</p>
            </div>
        </div>
    )
}