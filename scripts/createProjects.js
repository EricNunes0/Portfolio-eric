const languages = {
    "HTML": {
        "icon": "https://i.imgur.com/xa4sDsi.png"
    },
    "CSS": {
        "icon": "https://i.imgur.com/Qf2JKsE.png"
    },
    "JavaScript": {
        "icon": "https://i.imgur.com/2xi8y2c.png"
    },
    "React": {
        "icon": "https://i.imgur.com/xPXXlmN.png"
    },
    "Bootstrap": {
        "icon": "https://i.imgur.com/tLZH5Hh.png"
    },
    "jQuery": {
        "icon": "https://i.imgur.com/goYVKjm.png"
    },
    "Node.js": {
        "icon": "https://i.imgur.com/7jfIPn5.png"
    },
    "PHP": {
        "icon": "https://i.imgur.com/KD8NzbX.png"
    },
    "MySQL": {
        "icon": "https://i.imgur.com/YDbaGwX.png"
    },
    "Python": {
        "icon": "https://i.imgur.com/cM2XWrt.png"
    }
};

const projects = [
    {
        "id": 0,
        "name": "Janny Site",
        "link": "https://janny.vercel.app/",
        "color": "#f00000",
        "icon": "https://i.imgur.com/rihZYP2.png",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
    },
    {
        "id": 1,
        "name": "CEON - Loja virtual",
        "link": "https://ceon.vercel.app/",
        "color": "#4060d0",
        "icon": "https://i.imgur.com/s7q3rcU.png",
        "languages": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        "id": 3,
        "name": "Calculadora Online",
        "link": "https://calculadora-padrao.vercel.app/",
        "color": "#f060ff",
        "icon": "https://i.imgur.com/1MI0yjp.png",
        "languages": ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
        "id": 4,
        "name": "CalculaPy",
        "link": "CalculaPy.exe",
        "color": "#fff060",
        "icon": "https://i.imgur.com/m1cC5w1.png",
        "languages": ["Python"]
    },
    {
        "id": 5,
        "name": "Game Center",
        "link": "https://central-de-jogos.vercel.app/",
        "color": "#d020f0",
        "icon": "https://i.imgur.com/RRNsfDt.png",
        "languages": ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        "id": 6,
        "name": "Tic Tac Toe (Jogo da velha)",
        "link": "https://central-de-jogos.vercel.app/tictactoe",
        "color": "#50ff70",
        "icon": "https://i.imgur.com/4TmQWfu.png",
        "languages": ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        "id": 7,
        "name": "Minesweeper (Campo Minado)",
        "link": "https://central-de-jogos.vercel.app/minesweeper",
        "color": "#c0c050",
        "icon": "https://i.imgur.com/P2G3vuf.png",
        "languages": ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        "id": 8,
        "name": "Forca",
        "link": "https://central-de-jogos.vercel.app/forca",
        "color": "#70c0ff",
        "icon": "https://i.imgur.com/dPfgOJD.png",
        "languages": ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        "id": 9,
        "name": "Space Shooter",
        "link": "https://central-de-jogos.vercel.app/spaceshooter",
        "color": "#f02050",
        "icon": "https://i.imgur.com/LiQE5Qe.png",
        "languages": ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        "id": 10,
        "name": "Jogo da senha",
        "link": "https://jogo-da-senha.netlify.app/",
        "color": "#ff8040",
        "icon": "svgs/passwordGame.svg",
        "languages": ["HTML", "CSS", "JavaScript", "jQuery", "Node.js"]
    }
];

function createProjects() {
    let projectsText = "";
    for(const project of projects) {
        let langs = "";
        for(const lang of project.languages) {
            langs += `
                <div class = "project-lang">
                    <img class = "lang-images" src = "${languages[lang].icon}" alt = "${lang}"/>
                </div>
            `;
        };

        projectsText += `
        <div class = "project-divs">
            <a class = "project-links" id = "project-link-${project.id}" href = "${project.link}" target = "_blank">
                <input type = "color" class = "project-colors" value = "${project.color}"/>
                <span class = "project-spans">
                    <img class = "project-spans-images" src = "${project.icon}" alt = "Icon">
                    ${project.name}
                </span>
                <button class = "project-buttons"></button>
                <div class = "project-langs-div">
                    ${langs}
                </div>
            </a>
        </div>
        `;
    };
    const projectsMain = document.querySelector("#projects-main-div");
    projectsMain.innerHTML = projectsText;
};