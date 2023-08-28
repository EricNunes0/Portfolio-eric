const background = document.querySelector("#background");
let triangleAmount = 40;
for(let i = 0; i <= triangleAmount - 1; i++) {
    let triangleAnimationDuration = 2 + Math.floor(Math.random() * 5);
    const triangle = document.createElement("object");
    triangle.className = `background-triangles light`;
    triangle.data = `svgs/star.svg`;
    triangle.style.top = `${Math.floor(Math.random() * 100)}%`;
    triangle.style.left = `${Math.floor(Math.random() * 100)}%`;
    triangle.style.opacity = 1;
    triangle.style.animationDuration = `${triangleAnimationDuration}s`;
    background.appendChild(triangle);
    setInterval(function() {
        setTimeout(function() {
            triangle.style.opacity = 1;
        }, (triangleAnimationDuration / 2) * 1000);
        setTimeout(function() {
            triangle.style.opacity = 0;
            setTimeout(function() {
                triangle.style.top = `${Math.floor(Math.random() * 96)}%`;
                triangle.style.left = `${Math.floor(Math.random() * 96)}%`;
            }, 400);
        }, triangleAnimationDuration * 1000);
    }, triangleAnimationDuration * 1000);
};