const abasLinks = document.querySelectorAll(".abas-links");

for(const aba of abasLinks) {
    aba.addEventListener("mouseenter", () => {
        aba.classList.contains(`light`) ? aba.style.borderBottom = `1px solid #000`: aba.style.borderBottom = `1px solid #fff`;
    });
    aba.addEventListener("mouseleave", () => {
        aba.style.removeProperty(`border-bottom`);
    });
};