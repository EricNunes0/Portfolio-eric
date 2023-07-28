const themeButton = document.querySelector('#theme-button');
const menuThemeButton = document.querySelector('#menu-theme-button');
const headerSession = document.querySelector('#portfolio-header-header');
const aboutmeSession = document.querySelector('#portfolio-aboutme-header');
const projectsSession = document.querySelector('#portfolio-projects-header');
const contactsSession = document.querySelector('#portfolio-contacts-header');

/* Função para alterar tema da página */
function changePageTheme() {
    let themeIcons = document.querySelectorAll(".theme-buttons-icons");
    if(themeButton.className.includes("light")) {
        for(let item of document.querySelectorAll(".light")) {
            item.className = item.className.replace("light", "dark");
        }
        for(let i = 0; i <= themeIcons.length - 1; i++) {
            themeIcons[i].src = "https://i.imgur.com/n68qj9b.png";
        }
        sunTrianglesAnimation({reverse: true});
        moonAnimation({reverse: true});
        document.querySelector("#sun-icon").classList.add("hide");
        document.querySelector("#moon-icon").classList.remove("hide");
    } else if(themeButton.className.includes("dark")) {
        for(let item of document.querySelectorAll(".dark")) {
            item.className = item.className.replace("dark", "light");
        }
        for(let i = 0; i <= themeIcons.length - 1; i++) {
            themeIcons[i].src = "https://i.imgur.com/EFjsg8D.png";
        }
        sunTrianglesAnimation({reverse: false});
        moonAnimation({reverse: false});
        document.querySelector("#sun-icon").classList.remove("hide");
        document.querySelector("#moon-icon").classList.add("hide");
    }
};

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

function openNavMenu() {
    let menu = document.getElementById("menu").classList;
    let openNavButton = document.getElementById("nav-button").classList;
    let openNavButtonImage = document.getElementById("nav-button-image").classList;
    if(menu.contains(`closed`)) {
        menu.add(`opened`);
        menu.remove(`closed`);
        openNavButton.add(`opened`);
        openNavButton.remove(`closed`);
        openNavButtonImage.add(`opened`);
        openNavButtonImage.remove(`closed`);
    } else {
        menu.remove(`opened`);
        menu.add(`closed`);
        openNavButton.remove(`opened`);
        openNavButton.add(`closed`);
        openNavButtonImage.remove(`opened`);
        openNavButtonImage.add(`closed`);
    }
}