function CreateModalLangs({lang}) {
    return `
    <div class = "modal-langs-divs">
        <div class = "modal-langs-icons-divs">
            <img class = "modal-langs" src = "${languages[lang].icon}" alt = "${lang}"></img>
        </div>
        <div class = "modal-langs-names-divs hide">
            <span class = "modal-lang-names light">${lang}</span>
        </div>
    </div>
    `;
};