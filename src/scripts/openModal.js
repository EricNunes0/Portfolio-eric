export default function openModal() {
    const portfolioMain = document.querySelector("#portfolio-main");
    const modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("hide");
    portfolioMain.classList.add("blur");

    const html = document.getElementsByTagName("html")[0];
    html.style.overflow = `hidden`;
};