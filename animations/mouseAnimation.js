console.log("mouseAnimation.js carregado!");

const pageBody = document.querySelector("body");
const pageBodyHeight = pageBody.offsetHeight;
const mouseArea = document.createElement("div");
mouseArea.id = "mouse-animation-area";
pageBody.appendChild(mouseArea);

const mouseSpan = document.createElement("span");
mouseSpan.id = "mouse-circle";
const mouseSpanWidth = 30;
const mouseSpanHeight = 30;
mouseSpan.style.width = `${mouseSpanWidth}px`;
mouseSpan.style.height = `${mouseSpanHeight}px`;

mouseArea.appendChild(mouseSpan);


document.onmousemove = function OnMouseMove(e) {
    mouseSpan.style.top = `${(e.clientY + window.scrollY) - (mouseSpanHeight / 2)}px`;
    if((e.clientX + mouseSpanWidth) < window.screen.width) {
        mouseSpan.style.left = `${e.clientX - (mouseSpanWidth / 2)}px`;
    };
};