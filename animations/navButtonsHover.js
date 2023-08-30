const navButtons = document.querySelectorAll(".nav-buttons");

for(const button of navButtons) {
    const li = button.querySelector(".nav-buttons-li");
    button.addEventListener("mouseenter", () => {
        li.style.backgroundImage = `linear-gradient(90deg, #a0a0a0, #a0a0a0)`;
        li.style.animation = `NavButtonLi 0.1s ease-in`;
    });
    button.addEventListener("mouseleave", () => {
        li.style.removeProperty(`background-image`);
        li.style.removeProperty(`animation`);
    });
};