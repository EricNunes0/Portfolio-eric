const introButtons = document.querySelectorAll(".portfolio-intro-buttons");
for(const button of introButtons) {
    const buttonImage = button.querySelector(".button-images");
    button.addEventListener("mouseenter", () => {
        buttonImage.classList.add(`active`);
    });
    button.addEventListener("mouseleave", () => {
        buttonImage.classList.remove(`active`);
    });
};