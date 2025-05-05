export default function modalLangsHover() {
    const modalLangsDivs = document.querySelectorAll(".modal-langs-divs");
    modalLangsDivs.forEach((div) => {
        const langIconDiv = div.querySelector(".modal-langs-icons-divs");
        const lang = div.querySelector(".modal-langs");
        const langName = div.querySelector(".modal-langs-names-divs");
        lang.addEventListener("mouseenter", () => {
            langName.classList.remove("hide");
        });

        lang.addEventListener("mouseleave", () => {
            langName.classList.add("hide");
        });

        lang.addEventListener("click", () => {
            let animationDuration = 3;
            langIconDiv.classList.add("running");
            langIconDiv.style.animation = `ModalLangFly ${animationDuration}s ease-in-out`;
            lang.style.animationPlayState = `paused`;
            setTimeout(function() {
                langIconDiv.classList.remove("running");
                langIconDiv.style.removeProperty("animation");
                lang.style.animationPlayState = `running`;
            }, animationDuration * 1000);
        });
    });
};