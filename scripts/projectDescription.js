function projectDescription({project}) {
    let foundProject;
    for(const proj of projects) {
        if(proj.id === project) {
            foundProject = proj;
        };
    };
    if(!foundProject) {
        return;
    };
    openModal();
    document.querySelector("#modal-icon").src = foundProject.icon;
    document.querySelector("#modal-title").innerHTML = foundProject.name;
    document.querySelector("#modal-image").src = foundProject.image;
    document.querySelector("#modal-description").innerHTML = foundProject.description;
    document.querySelector("#modal-link-redirect").href = foundProject.link;
    document.querySelector("#modal-link-rep").href = foundProject.repositorie;

    const modalLangsDiv = document.querySelector("#modal-langs-div");
    let rows = [];
    foundProject.languages.forEach((lang) => {
        rows.push(CreateModalLangs({lang: lang}));
    });
    modalLangsDiv.innerHTML = rows.join("");
    modalLangsHover();
};