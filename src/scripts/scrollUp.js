export function scrollEvent() {
    let scrollUpButton = document.querySelector("#scroll-up-button");
    const maxScrollHeight = 400;
    if(document.body.scrollTop > maxScrollHeight || document.documentElement.scrollTop > maxScrollHeight) {
        scrollUpButton.classList.remove("hidden");
    } else {
        scrollUpButton.classList.add("hidden");
    }
}

export default function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}