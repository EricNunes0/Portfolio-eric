function navMenuClose() {
    let menu = document.getElementById("menu").classList;
    let openNavButton = document.getElementById("nav-button").classList;
    let openNavButtonImage = document.getElementById("nav-button-image").classList;
    menu.remove(`opened`);
    menu.add(`closed`);
    openNavButton.remove(`opened`);
    openNavButton.add(`closed`);
    openNavButtonImage.remove(`opened`);
    openNavButtonImage.add(`closed`);
};