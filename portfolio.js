const themeButton = document.querySelector('#theme-button');
const headerSession = document.querySelector('#portfolio-header-header');
const aboutmeSession = document.querySelector('#portfolio-aboutme-header');
const projectsSession = document.querySelector('#portfolio-projects-header');
const contactsSession = document.querySelector('#portfolio-contacts-header');

themeButton.addEventListener("click", function() {
    if(themeButton.className.includes("light")) {
        themeButton.className = "theme-buttons dark";
        headerSession.className = "portfolio-header dark";
        aboutmeSession.className = "portfolio-aboutme dark";
        projectsSession.className = "portfolio-projects dark";
        contactsSession.className = "portfolio-contacts dark";
        themeButton.innerHTML = "🌙";
        changeTextsColor(1);
    } else if(themeButton.className.includes("dark")) {
        themeButton.className = "theme-buttons light";
        headerSession.className = "portfolio-header light";
        aboutmeSession.className = "portfolio-aboutme light";
        projectsSession.className = "portfolio-projects light";
        contactsSession.className = "portfolio-contacts light";
        themeButton.innerHTML = "🌞";
        changeTextsColor(0);
    };
});

/* Alterar a cor de todos os textos */
function changeTextsColor(theme) {
    /*
     * theme 0 = light;
     * theme 1 = dark;
    */
    if(theme == 0) {
        const texts = document.querySelectorAll(".dark-texts");
        for(let i = 0; i <= texts.length - 1; i++) {
            console.log(texts[i].className.replace("dark-texts", "light-texts"))
            texts[i].className = texts[i].className.replace("dark-texts", "light-texts");
        }
    } else if(theme == 1) {
        const texts = document.querySelectorAll(".light-texts");
        for(let i = 0; i <= texts.length - 1; i++) {
            console.log(texts[i].className.replace("light-texts", "dark-texts"))
            texts[i].className = texts[i].className.replace("light-texts", "dark-texts");
        }
    }
}