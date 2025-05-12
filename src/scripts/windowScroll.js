import { scrollEvent } from "./scrollUp";
import textRevealAnimation from "./textRevealAnimation";

window.onscroll = function() {
    textRevealAnimation();
    scrollEvent();
};