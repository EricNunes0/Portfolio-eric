const projectsHeader = document.querySelector("#portfolio-projects-header");
const projectsBackground = document.querySelector("#portfolio-projects-background");
const projectLinks = document.querySelectorAll(".project-links");

for(let project of projectLinks) {
    project.addEventListener("mouseenter", () => {
        let bgColor = project.querySelector(".project-colors").value;
        let newBg = project.querySelector(".project-spans-images").src;
        projectsBackground.style.backgroundImage = `linear-gradient(180deg, ${bgColor}40 0%, transparent 50%)`;
        projectsBackground.style.animation = `ProjectColors 2.5s linear infinite`;
        projectsBackground.style.opacity = `1`;
    });
    project.addEventListener("mouseleave", () => {
        //projectsBackground.style.removeProperty("background-image");
        projectsBackground.style.removeProperty("animation");
        projectsBackground.style.opacity = `0`;
    });
};