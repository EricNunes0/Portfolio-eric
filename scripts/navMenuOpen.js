function navMenuOpen() {
    let menu = document.getElementById("menu").classList;
    let openNavButton = document.getElementById("nav-button").classList;
    let openNavButtonImage = document.getElementById("nav-button-image").classList;
    menu.add(`opened`);
    menu.remove(`closed`);
    openNavButton.add(`opened`);
    openNavButton.remove(`closed`);
    openNavButtonImage.add(`opened`);
    openNavButtonImage.remove(`closed`);
};