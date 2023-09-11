function CreateLanguageDiv({id, name, image}) {
    const reference = document.querySelector(`#${id}`);
    if(reference) {
        const languageDiv = document.createElement("div");
        languageDiv.className = "knowledges-language-divs light";
        languageDiv.innerHTML = `
            <div class = "knowledges-language-icon-divs">
                <img class = "knowledges-languages-icons" src = "${image}" alt = "${name}"></img>
            </div>
            <div class = "knowledges-language-name-divs">
                <p class = "knowledges-languages-names light">${name}</p>
            </div>
        `;
        reference.appendChild(languageDiv);
    }
};