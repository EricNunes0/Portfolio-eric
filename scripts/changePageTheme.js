const themeButton = document.querySelector('#theme-button');

/* Função para alterar tema da página */
function changePageTheme() {
    let themeIcon = document.querySelector("#mobile-theme-icon");
    if(themeButton.className.includes("light")) {
        for(let item of document.querySelectorAll(".light")) {
            item.className = item.className.replace("light", "dark");
        }
        themeIcon.src = "https://i.imgur.com/n68qj9b.png";
        sunTrianglesAnimation({reverse: true});
        moonAnimation({reverse: true});
        document.querySelector("#sun-icon").classList.add("hide");
        document.querySelector("#moon-icon").classList.remove("hide");
    } else if(themeButton.className.includes("dark")) {
        for(let item of document.querySelectorAll(".dark")) {
            item.className = item.className.replace("dark", "light");
        }
        themeIcon.src = "https://i.imgur.com/EFjsg8D.png";
        sunTrianglesAnimation({reverse: false});
        moonAnimation({reverse: false});
        document.querySelector("#sun-icon").classList.remove("hide");
        document.querySelector("#moon-icon").classList.add("hide");
    }
};