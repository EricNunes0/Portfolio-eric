function CreateAsteroides(list) {
    const imageLink = document.querySelector("#intro-image-link");
    if(imageLink) {
        let listKeys = Object.keys(list);
        let totalKeys = listKeys.length;
        let rotateExp = 360 / totalKeys;
        let rotateDeg = 0;
        console.log(totalKeys, rotateExp)
        for(const key of listKeys) {
            const asteroide = document.createElement("div");
            asteroide.className = "intro-image-asteroides";
            bgImage = list[key].icon;
            asteroide.style.backgroundImage = `url("${bgImage}")`;
            asteroide.style.transform = `rotate(${rotateDeg}deg)`;
            imageLink.appendChild(asteroide);
            rotateDeg += rotateExp;
        };
    };
};