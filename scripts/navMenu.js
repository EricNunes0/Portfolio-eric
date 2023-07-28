function navMenu() {
    let menu = document.getElementById("menu").classList;
    if(menu.contains(`closed`)) {
        navMenuOpen();
    } else {
        navMenuClose();
    };
};