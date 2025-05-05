export default function sunTrianglesAnimation({reverse}) {
    const animationDuration = 0.3;
    for(let i = 1; i <= 8; i++) {
        const triangle = document.querySelector(`#sun-triangle-${i}`);
        let animationText;
        if((!reverse) || reverse !== true) {
            animationText = `SunTrianglesIn${i} var(--sun-triangles-duration) var(--sun-triangles-timing) var(--sun-triangles-iteration)`
        } else {
            animationText = `SunTrianglesIn${i} var(--sun-triangles-duration) var(--sun-triangles-timing) var(--sun-triangles-iteration) reverse`;
        }
        triangle.style.animation = animationText;
        setTimeout(function() {
            triangle.style.removeProperty(`animation`);
        }, animationDuration * 1000);
    };
};