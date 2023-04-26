const canvas = document.getElementById('bonk-canvas');
const ctx = canvas.getContext("2d");

const bonkInputCenary = document.querySelector("#bonk-file-input-cenary");
const bonkInput0 = document.querySelector("#bonk-file-input-0");
const bonkInput1 = document.querySelector("#bonk-file-input-1");
const bonkInputDownload = document.querySelector("#bonk-file-input-download");
var upImg = "";
var imagesSaved = {
    "cenary": null,
    "bonk0": null,
    "bonk1": null
};

/* Baixar canvas */
let imageDownload = document.getElementById('bonk-canvas').toDataURL("image/png");
document.getElementById("download").href = imageDownload;

bonkInputCenary.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upImg = reader.result;
        BonkDogEditor(upImg, 0, 0);
    });
    reader.readAsDataURL(this.files[0]);
    let imageDownloadLink = document.getElementById('bonk-canvas').toDataURL("image/png");
    document.getElementById("download").href = imageDownloadLink;
});

bonkInput0.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upImg = reader.result;
        BonkDogEditor(upImg, 1, 0);
    });
    reader.readAsDataURL(this.files[0]);
    let imageDownloadLink = document.getElementById('bonk-canvas').toDataURL("image/png");
    document.getElementById("download").href = imageDownloadLink;
});

bonkInput1.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upImg = reader.result;
        BonkDogEditor(upImg, 1, 1);
    });
    reader.readAsDataURL(this.files[0]);
    let imageDownloadLink = document.getElementById('bonk-canvas').toDataURL("image/png");
    document.getElementById("download").href = imageDownloadLink;
});

bonkInputDownload.addEventListener("click", function() {
    let imageDownloadLink = document.getElementById('bonk-canvas').toDataURL("image/png");
    document.getElementById("download").href = imageDownloadLink;
})

/* Editar canvas (imagem) */
function BonkDogEditor(img, type, pos) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = "https://i.imgur.com/SCcRfyt.png";
    let imageCenary, imagesBonk = [null, null];
    if(type == 0) {
        imagesSaved.cenary = img;
    } else if(type == 1) {
        imagesSaved[`bonk${pos}`] = img;
    };

    if(imagesSaved.cenary) {
        imageCenary = imagesSaved.cenary;
    };
    for(let i = 0; i <= 1; i++) {
        if(imagesSaved[`bonk${i}`]) {
            imagesBonk[i] = imagesSaved[`bonk${i}`];
        };
    };
    let positions = [
        [145, 16, 196, 196],
        [478, 189, 158, 158]
    ];
    let arcs = [
        [242, 115, 105],
        [555, 267, 80]
    ];


    let cenary, bonksNewImages = [null, null];
    if(imagesSaved.cenary) {
        cenary = new Image();
        cenary.src = imagesSaved.cenary;
    };
    if(imagesSaved.bonk0) {
        bonksNewImages[0] = new Image();
        bonksNewImages[0].src = imagesSaved.bonk0;
    };
    if(imagesSaved.bonk1) {
        bonksNewImages[1] = new Image();
        bonksNewImages[1].src = imagesSaved.bonk1;
    };
    image.onload = function() {
        if(cenary) {
            ctx.drawImage(cenary, 0, 0, canvas.width, canvas.height);
        };
        for(let i = 0; i <= 1; i++) {
            if(bonksNewImages[i]) {
                ctx.save(); 
                ctx.beginPath();
                ctx.arc(arcs[i][0], arcs[i][1], arcs[i][2], 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(bonksNewImages[i], positions[i][0], positions[i][1], positions[i][2], positions[i][3]);
                ctx.beginPath();
                ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };
        };
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.crossOrigin = "anonymous";
    return image;
};

function clearBonkImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    imagesSaved.cenary = null;
    imagesSaved.bonk0 = null;
    imagesSaved.bonk1 = null;
};