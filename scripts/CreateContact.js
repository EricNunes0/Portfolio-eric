function CreateContact({query, name, image, url, username}) {
    const contatosList = document.querySelector(query);
    if(contatosList) {
        const contatoItem = document.createElement("div");
        contatoItem.className = `contatos-items`;
        contatoItem.innerHTML = `
            <a class = "contatos-links" href = "${url}" alt = "${name}" target = "_blank">
                <img class = "contato-images light" src = "${image}"/>
                <div class = "contato-texts-div">
                    <p class = "contato-titles light">${name}</p>
                    <p class = "contato-subtitles light">${username}</p>
                </div>
            </a>
        `;
        contatosList.appendChild(contatoItem);
    };
};