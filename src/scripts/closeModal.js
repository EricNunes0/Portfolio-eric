export default function closeModal() {
    const portfolioMain = document.querySelector("#portfolio-main");
    const modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.add("hide");
    portfolioMain.classList.remove("blur");

    const html = document.getElementsByTagName("html")[0];
    html.style.overflow = `unset`;
};