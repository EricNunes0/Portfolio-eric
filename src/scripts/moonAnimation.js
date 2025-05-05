export default function moonAnimation({reverse}) {
    const animationDuration = 0.3;
    const moon = document.querySelector(`#moon-svg-path`);
    let animationText;
    if((!reverse) || reverse !== true) {
        animationText = `MoonIcon var(--moon-duration) var(--moon-timing) var(--moon-iteration)`
    } else {
        animationText = `MoonIcon var(--moon-duration) var(--moon-timing) var(--moon-iteration) reverse`;
    }
    moon.style.animation = `MoonIcon var(--moon-duration) var(--moon-timing) var(--moon-iteration)`;
    setTimeout(function() {
        moon.style.removeProperty(`animation`);
    }, animationDuration * 1000);
};