const themeButton = document.querySelector('#theme-button');
const menuThemeButton = document.querySelector('#menu-theme-button');
const headerSession = document.querySelector('#portfolio-header-header');
const aboutmeSession = document.querySelector('#portfolio-aboutme-header');
const projectsSession = document.querySelector('#portfolio-projects-header');
const contactsSession = document.querySelector('#portfolio-contacts-header');

/* Função para alterar tema da página */
function changePageTheme() {
    if(themeButton.className.includes("light")) {
        document.getElementById("header-nav").className = "portfolio-nav dark";
        themeButton.className = "theme-buttons dark";
        headerSession.className = "portfolio-header dark";
        aboutmeSession.className = "portfolio-aboutme dark";
        projectsSession.className = "portfolio-projects dark";
        contactsSession.className = "portfolio-contacts dark";

        let navLinks = document.getElementsByClassName("abas-links");
        for(let navLink of navLinks) {
            navLink.className = "abas-links dark";
        };

        let themeIcons = document.getElementsByClassName("theme-buttons-icons");
        for(let i = 0; i <= themeIcons.length - 1; i++) {
            themeIcons[i].className = "theme-buttons-icons dark";
            themeIcons[i].src = "https://i.imgur.com/n68qj9b.png";
        }
        document.getElementById("header-title").className = "header-titles dark";
        document.getElementById("header-name").className = "header-names dark";
        document.getElementById("header-description").className = "header-descriptions dark";
        document.getElementById("header-code").className = "header-codes dark";
        document.getElementById("aboutme-container").className = "aboutme-container dark";
        document.getElementById("about-me").className = "portfolio-aboutme-title dark";
        document.getElementById("projects-main-description").className = "projects-main-descriptions dark";
        changeTextsColor(1);
    } else if(themeButton.className.includes("dark")) {
        document.getElementById("header-nav").className = "portfolio-nav light";
        themeButton.className = "theme-buttons light";
        headerSession.className = "portfolio-header light";
        aboutmeSession.className = "portfolio-aboutme light";
        projectsSession.className = "portfolio-projects light";
        contactsSession.className = "portfolio-contacts light";

        let navLinks = document.getElementsByClassName("abas-links");
        for(let navLink of navLinks) {
            navLink.className = "abas-links light";
        };

        let themeIcons = document.getElementsByClassName("theme-buttons-icons");
        for(let i = 0; i <= themeIcons.length - 1; i++) {
            themeIcons[i].className = "theme-buttons-icons light";
            themeIcons[i].src = "https://i.imgur.com/EFjsg8D.png";
        }
        document.getElementById("header-title").className = "header-titles light";
        document.getElementById("header-name").className = "header-names light";
        document.getElementById("header-description").className = "header-descriptions light";
        document.getElementById("header-code").className = "header-codes light";
        document.getElementById("aboutme-container").className = "aboutme-container light";
        document.getElementById("about-me").className = "portfolio-aboutme-title light";
        document.getElementById("projects-main-description").className = "projects-main-descriptions light";
        changeTextsColor(0);
    };
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
    let menu = document.getElementById("menu").className
    if(menu == "nav-menu closed") {
        document.getElementById("menu").className = "nav-menu opened";
        document.getElementById("nav-button").className = "open-nav-button opened";
        document.getElementById("nav-button-image").className = "open-nav-button-image opened";
    } else {
        document.getElementById("menu").className = "nav-menu closed";
        document.getElementById("nav-button").className = "open-nav-button closed";
        document.getElementById("nav-button-image").className = "open-nav-button-image closed";
    }
}