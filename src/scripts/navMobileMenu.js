import navMobileMenuClose from "./navMobileMenuClose";
import navMobileMenuOpen from "./navMobileMenuOpen";

export default function navMobileMenu() {
    let menu = document.getElementById("nav-mobile-menu").classList;
    menu.contains(`closed`) ? navMobileMenuOpen() : navMobileMenuClose();
};