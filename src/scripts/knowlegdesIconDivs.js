const knowlegdesIconDivs = document.querySelectorAll(".knowledges-icon-divs");

for(const div of knowlegdesIconDivs) {
    let animationDuration = 0.3;
    div.addEventListener("click", () => {
        div.classList.add("click");
        div.style.transform = "rotate3d(0, 1, 0, 180deg)";
        setTimeout(function() {
            div.classList.remove("click");
            div.style.removeProperty("transform");
        }, animationDuration * 1000);
    });
};