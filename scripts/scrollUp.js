let scrollUpButton = document.getElementById("portfolio-scroll-up-button");

window.onscroll = function() {scrollEvent()};

function scrollEvent() {
    const maxScrollHeight = 400;
    if(document.body.scrollTop > maxScrollHeight || document.documentElement.scrollTop > maxScrollHeight) {
        scrollUpButton.classList.remove("hidden");
    } else {
        scrollUpButton.classList.add("hidden");
    }
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}