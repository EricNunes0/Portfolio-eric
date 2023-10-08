const headerName = document.querySelector("#header-name");

const types = [
    {
        "texts": ["Olá, eu sou o"],
        "query": "#header-title",
        "delay": 0,
        "interval": 0.05
    },
    {
        "texts": ["Eric Nunes"],
        "query": "#header-name",
        "delay": 1,
        "interval": 0.15
    },
    {
        "texts": [
            "e estou procurando a minha",
            "primeira vaga de estágio/emprego",
            "como programador!"
        ],
        "query": "#header-description",
        "delay": 3,
        "interval": 0.04
    },
    {
        "texts": ["Desenvolvedor Web"],
        "query": "#header-code",
        "delay": 6.3,
        "interval": 0.06
    }
];

for(const type of types) {
    setTimeout(function() {
        let query = document.querySelector(type.query);
        let typeText = type.texts.join("+").trim().split("");
        let typingInterval = setInterval(function() {
            if(!typeText[0]) {
                clearInterval(typingInterval);
                return;
            };
            if(typeText[0] === `+`) {
                query.innerHTML = query.innerHTML + `<br>`;
            } else {
                query.innerHTML = query.innerHTML + typeText[0];
            }
            typeText.shift();
        }, type.interval * 1000);
    }, type.delay * 1000);
};