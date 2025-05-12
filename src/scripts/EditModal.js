import openModal from "./openModal";

export default function EditModal({project, setProject}) {
    openModal();
    document.querySelector("#modal-icon").src = project.icon;
    document.querySelector("#modal-title").innerHTML = project.name;
    document.querySelector("#modal-image").src = project.image;
    document.querySelector("#modal-description").innerHTML = project.description;
    document.querySelector("#modal-link-redirect").href = project.link;
    document.querySelector("#modal-link-rep").href = project.repositorie;

    const modalLinkPost = document.querySelector("#modal-link-post");
    if(project.post) {
        modalLinkPost.classList.remove("hide");
        modalLinkPost.href = project.post;
    } else {
        modalLinkPost.classList.add("hide");
        modalLinkPost.href = "";
    };
    setProject(project);
    //modalLangsHover();
};