const experiencesBackground = document.querySelector("#portfolio-experiences-background");
const experiencesBackgroundLight = document.querySelector("#portfolio-experiences-background-light");
const projectsHeader = document.querySelector("#portfolio-projects-header");
const projectsBackground = document.querySelector("#portfolio-projects-background");
const projectLinks = document.querySelectorAll(".project-links");

for(let project of projectLinks) {
    project.addEventListener("mouseenter", () => {
        let bgColor = project.querySelector(".project-colors").value;
        let newBg = project.querySelector(".project-spans-images").src;
        experiencesBackground.style.backgroundImage = `linear-gradient(0deg, ${bgColor}40 0%, transparent 50%)`;
        experiencesBackground.style.animation = `ProjectColors 2.5s linear infinite`;
        experiencesBackground.style.opacity = `1`;
        
        experiencesBackgroundLight.style.boxShadow = `0 0 .2rem #fff, 0 0 .2rem #fff,0 0 2rem ${bgColor}, 0 0 0.8rem ${bgColor}, 0 0 2.8rem ${bgColor}, inset 0 0 1.3rem ${bgColor};`;
        
        projectsBackground.style.backgroundImage = `linear-gradient(180deg, ${bgColor}40 0%, transparent 50%)`;
        projectsBackground.style.animation = `ProjectColors 2.5s linear infinite`;
        projectsBackground.style.opacity = `1`;
    });
    project.addEventListener("mouseleave", () => {
        //projectsBackground.style.removeProperty("background-image");
        experiencesBackground.style.removeProperty("animation");
        experiencesBackground.style.opacity = `0`;
        projectsBackground.style.removeProperty("animation");
        projectsBackground.style.opacity = `0`;
    });
};