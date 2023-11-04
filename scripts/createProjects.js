const languages = {
    "HTML": {
        "image": "images/codes/img_html.png",
        "icon": "svgs/code/html.svg"
    },
    "CSS": {
        "image": "images/codes/img_css.png",
        "icon": "svgs/code/css.svg"
    },
    "JavaScript": {
        "image": "images/codes/img_js.png",
        "icon": "svgs/code/js.svg"
    },
    "React": {
        "image": "images/codes/img_react.png",
        "icon": "svgs/code/react.svg"
    },
    "Bootstrap": {
        "image": "images/codes/img_bootstrap.png",
        "icon": "svgs/code/bootstrap.svg"
    },
    "jQuery": {
        "image": "images/codes/img_jquery.png",
        "icon": "svgs/code/jquery.svg"
    },
    "Sass": {
        "image": "images/codes/img_sass.png",
        "icon": "svgs/code/sass.svg"
    },
    "CSS-in-JS": {
        "image": "images/codes/img_CssInJs.png",
        "icon": "svgs/code/cssinjs.svg"
    },
    "Tailwind": {
        "image": "images/codes/img_tailwind.png",
        "icon": "svgs/code/tailwind.svg"
    },
    "Node.js": {
        "image": "images/codes/img_nodejs.png",
        "icon": "svgs/code/nodejs.svg"
    },
    "EJS": {
        "image": "images/codes/img_ejs.png",
        "icon": "svgs/code/ejs.svg"
    },
    "PHP": {
        "image": "images/codes/img_php.png",
        "icon": "svgs/code/php.svg"
    },
    "SQLite": {
        "image": "images/codes/img_sqlite.png",
        "icon": "svgs/code/sqlite.svg"
    },
    "MySQL": {
        "image": "images/codes/img_mysql.png",
        "icon": "svgs/code/mysql.svg"
    },
    "Python": {
        "image": "images/codes/img_python.png",
        "icon": "svgs/code/python.svg"
    }
};

const projects = [
    {
        "id": 0,
        "name": "Janny Site",
        "link": "https://janny.vercel.app/",
        "color": "#f00000",
        "icon": "images/projects/janny/icon.png",
        "image": "images/gif_project0.gif",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Sass"],
        "repositorie": "https://github.com/EricNunes0/React-site",
        "description": `
            Esse foi o meu primeiro projeto desenvolvido utilizando React, há mais de 1 ano atrás. "Janny" é o nome da minha aplicação desenvolvida para o aplicativo <a>Discord</a>, com o intuito de entreter os usuários da plataforma, com mais de 150 funcionalidades exclusivas. O projeto foi criado com Node.js usando a biblioteca Discord.js, e foi o meu primeiro projeto à me dar experiência com a linguagem JavaScript.
            <br></br>
            O intuito deste site é dar auxílio aos usuários do bot, que desejam saber mais informações sobre o mesmo, como todos os comandos disponíveis para usar e como obter suporte direto comigo em caso de ter problemas ao usá-lo.
            <br></br>
            Você pode adicionar o Janny em qualquer servidor que desejar, basta convidá-lo clicando <a href = "https://discord.com/api/oauth2/authorize?client_id=911002921594925056&permissions=1533236608247&scope=bot" target = "_blank">aqui</a>.
        `
    },
    {
        "id": 1,
        "name": "CEON - Loja virtual",
        "link": "https://ceon.vercel.app/",
        "color": "#4060d0",
        "icon": "images/projects/ceon/icon.png",
        "image": "images/projects/ceon/image(3).png",
        "languages": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        "repositorie": "https://github.com/EricNunes0/Ceon",
        "description": `
            Este é um projeto criado para a faculdade em que estudo, referente a matéria de Desenvolvimento Web com HTML, CSS, JavaScript e PHP.
            <br></br>
            Trata-se de uma página para simular um site de venda de produtos, onde você pode pesquisar e escolher os produtos que deseja adicionar ao carrinho.
            <br></br>
            Além do sistema de compras, este foi o primeiro projeto que tive contato com a linguagem PHP, onde desenvolvi meu primeiro sistema de cadastro e login, armazenando os dados dos usuários em um banco de dados (MySQL).
        `
    },
    {
        "id": 3,
        "name": "Calculadora Web",
        "link": "https://calculadora-padrao.vercel.app/",
        "color": "#f060ff",
        "icon": "images/projects/calculadora/icon.png",
        "image": "images/projects/calculadora/image(2).png",
        "languages": ["HTML", "CSS", "JavaScript", "Bootstrap"],
        "repositorie": "https://github.com/EricNunes0/Calculadora",
        "description": `
            Esse é um projeto que comecei a desenvolver após um exercício prático de uma aula de Desenvolvimento Web em HTML, CSS, JavaScript e PHP. Mesmo concluindo a atividade, não me contentei com o resultado e sentia que poderia melhorá-lo ainda mais se tivesse mais tempo.
            <br></br>
            E este foi o resultado final: uma calculadora web, desenvolvida com HTML, CSS e JavaScript.
            <br>
            Algumas features que valem destacar:
            <br>
            • As contas são salvas em um histórico;
            <br>
            • É possível utilizar o teclado para realizar as operações matemáticas;
            <br>
            • Ao "fechar" a calculadora os dados do display são apagados;
            <br>
            • Só é possível adicionar um ponto decimal;
            <br>
            • É possível alterar a cor de fundo do site;
            <br>
            • É possível alterar o tema da calculadora (claro/escuro);
            <br>
            • Responsivo para Mobile;
        `
    },
    {
        "id": 4,
        "name": "CalculaPy",
        "link": "CalculaPy.exe",
        "color": "#fff060",
        "icon": "images/projects/calculapy/icon.png",
        "image": "images/projects/calculapy/image(0).png",
        "languages": ["Python"],
        "repositorie": "https://github.com/EricNunes0/CalculaPy",
        "description": `
            Desenvolvido para uma atividade da faculdade, referente a matéria de Modelagem RAD (Desenvolvimento rápido de aplicações) em Python. A ideia era apenas desenvolver uma calculadora com as 4 operações básicas usando a biblioteca Tkinter, mas senti que poderia evoluir o projeto.
            <br></br>
            Portanto, tive a ideia de fazer uma recriação da calculadora padrão do Windows 10, usando o Tkinter para a criação da GUI, e a biblioteca PyInstaller para a criação do arquivo executável.
            <br>
            Algumas features que valem destacar:
            <br>
            • As contas são salvas em um histórico;
            <br>
            • Só é possível adicionar um ponto decimal;
            <br>
            • É possível alterar o tema da calculadora (claro/escuro);
            <br>
            • GUI responsiva;
            <br></br>
            Você pode baixar o executável deste projeto clicando em "Acessar projeto".
        `
    },
    {
        "id": 5,
        "name": "Game Center",
        "link": "https://central-de-jogos.vercel.app/",
        "color": "#d020f0",
        "icon": "images/projects/gamecenter/icon.png",
        "image": "images/projects/gamecenter/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "CSS-in-JS"],
        "repositorie": "https://github.com/EricNunes0/Game-Center",
        "description": `
            Após desenvolver 3 jogos para a web (jogo da velha, campo minado e forca), decidi uní-los em um único site de jogos, onde poderia disponibilizá-los mais facilmente.
            <br></br>
            Com isso, surgiu a ideia da Game Center: a central de jogos onde todos os meus jogos seriam disponibilizados de forma mais prática.
        `
    },
    {
        "id": 6,
        "name": "Tic Tac Toe (Jogo da velha)",
        "link": "https://central-de-jogos.vercel.app/tictactoe",
        "color": "#50ff70",
        "icon": "images/projects/tictactoe/icon.png",
        "image": "images/projects/tictactoe/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "CSS-in-JS"],
        "repositorie": "https://github.com/EricNunes0/Game-Center",
        "description": `
            Este foi o meu primeiro jogo desenvolvido para a web: o jogo da velha. A proposta era recriar o clássico jogo para que o usuário possa jogar contra a CPU, ou contra outro usuário.
            <br></br>
            Destaques:
            <br>
            • Você pode jogar pelo teclado;
            <br>
            • É possível alterar o tema do jogo (claro/escuro);
            <br>
            • Menu de ajuda com todas as teclas e funções disponíveis;
            <br>
            • Efeitos sonoros, juntamente com a opção de ativá-los ou desativá-los;
            <br>
            • Customização da cor dos jogadores;
        `
    },
    {
        "id": 7,
        "name": "Minesweeper (Campo Minado)",
        "link": "https://central-de-jogos.vercel.app/minesweeper",
        "color": "#c0c050",
        "icon": "images/projects/minesweeper/icon.png",
        "image": "images/projects/minesweeper/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "CSS-in-JS"],
        "repositorie": "https://github.com/EricNunes0/Game-Center",
        "description": `
            Meu segundo jogo desenvolvido para a web: o campo minado. A ideia é recriar o clássico jogo, onde você precisar marcar todos os quadrados vazios da grande, tomando cuidado para não atingir nenhuma bomba.
            <br></br>
            Destaques:
            <br>
            • Você pode alterar o tamanho da grade (5x5 até 15x15);
            <br>
            • É possível alterar o tema do jogo (claro/escuro);
            <br>
            • Clicando com o botão direito do mouse, você poderá usar a bandeira para marcar um quadrado que acredite ter uma bomba;
        `
    },
    {
        "id": 8,
        "name": "Forca",
        "link": "https://central-de-jogos.vercel.app/forca",
        "color": "#70c0ff",
        "icon": "images/projects/forca/icon.png",
        "image": "images/projects/forca/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "CSS-in-JS"],
        "repositorie": "https://github.com/EricNunes0/Game-Center",
        "description": `
            Terceiro jogo desenvolvido para a web: a forca. A ideia é recriar o clássico jogo, onde você precisa adivinhar qual é a palavra proposta, tendo como dica o número de letras e o tema ligado à palavra.
            <br></br>
            Destaques:
            <br>
            • Primeiro contato que tive com imagens em SVG;
            <br>
            • Ao vencer uma partida, você receberá uma dica para a próxima partida;
        `
    },
    {
        "id": 9,
        "name": "Space Shooter",
        "link": "https://central-de-jogos.vercel.app/spaceshooter",
        "color": "#f02050",
        "icon": "images/projects/spaceshooter/icon.png",
        "image": "images/projects/spaceshooter/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "CSS-in-JS"],
        "repositorie": "https://github.com/EricNunes0/Game-Center",
        "description": `
            Este foi o meu maior e mais ambicioso jogo desenvolvido para a web: o Space Shooter. Desenvolvido com React, meu objetivo foi testar minhas habilidades de desenvolvimento de jogos e aplicá-los no desenvolvimento web. Foi o jogo mais trabalhoso que já fiz, e que sem dúvidas é um dos destaques dos meus projetos.
            <br></br>
            Destaques:
            <br>
            • 13 fases ao todo;
            <br>
            • Modos para 1 e 2 jogadores;
            <br>
            • Seleção de fases;
            <br>
            • Configuração de controles no menu;
            <br>
            • Fases com cenários variados;
            <br>
            • Sistema de colisões;
            <br>
            • Criado sem usar canvas;
            <br>
            • 4 tipos de fases (derrotar inimigos, coletar orbs, derrotar chefes, competir contra rivais);
            <br>
            • Armas coletáveis;
            <br>
            • Botões para jogar no celular;
            <br></br>
            Em breve planejo trazer mais atualizações para este jogo.
        `
    },
    {
        "id": 10,
        "name": "Jogo da senha",
        "link": "https://jogo-da-senha.netlify.app/",
        "color": "#ff8040",
        "icon": "svgs/passwordGame.svg",
        "image": "images/projects/password/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "jQuery", "Node.js"],
        "repositorie": "https://github.com/EricNunes0/Password-game",
        "description": `
            Desenvolvido com Node.js, este projeto tem o intuito de recriar o jogo que viralizou recentemente: The Password Game. Seu objetivo neste jogo é criar uma senha que cumpra todas as regras propostas.
            <br></br>
            Foi o primeiro projeto que tive contato com o jQuery, e pude aprender bastante sobre como o mesmo funciona.
        `
    },
    {
        "id": 11,
        "name": "Word Scrapper",
        "link": "https://ericnunes0.pythonanywhere.com/",
        "color": "#ff8030",
        "icon": "images/projects/wordscrapper/icon.png",
        "image": "images/projects/wordscrapper/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Python"],
        "repositorie": "https://github.com/EricNunes0/Word-Scrapper.git",
        "description": `
            Desenvolvido com Django (Python), este projeto foi desenvolvido como uma atividade prática das aulas de Big Data em Python, onde estou aprendendo sobre os conceitos de MapReduce. O Word Scrapper extrai todas as palavras de um texto, e as exibe em uma lista, mostrando quantas vezes a mesma se repete.
            <br></br>
            Destaques:
            <br>
            • Conexão com back-end via Django (Python);
            <br>
            • Utilização dos conceitos básicos do MapReduce para extração de dados;
            <br>
            • Extração de textos de outros sites via URL;
        `
    },
    {
        "id": 12,
        "name": "Login Node",
        "link": "https://login-node.cyclic.app/",
        "color": "#ff8030",
        "icon": "images/projects/login/icon.png",
        "image": "images/projects/login/image(0).png",
        "languages": ["HTML", "CSS", "JavaScript", "Tailwind", "Node.js", "EJS", "SQLite"],
        "repositorie": "https://github.com/EricNunes0/Login",
        "description": `
            O Login Node é um projeto criado para ampliar meus conhecimentos em back-end com Node.js. Trata-se de uma aplicação com o sistema de cadastro e login, onde o usuário pode fazer seu cadastro e suas informações são enviadas para o banco de dados SQLite, permitindo que o mesmo possa fazer seu login em seguida.
            <br></br>
            Destaques:
            <br>
            • Back-end com Node.js;
            <br>
            • Aplicação do EJS (Embedded JavaScript templating), uma linguagem que permite gerar marcação HTML com JavaScript simples;
            <br>
            • Conexão com banco de dados SQLite;
            <br>
            • Criação e gerenciamentos de cookies no navegador do usuário, o que permite que o usuário possa acessar a tela final diretamente caso tenha feito o login anteriormente;
            <br>
            • Este foi o primeiro projeto que tive contato com Tailwind CSS;
        `
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
            <button type = "button" class = "project-main-buttons" id = "project-button-${project.id}" onclick = "projectDescription({project: ${project.id}})">
                <div class = "project-links" id = "project-link-${project.id}">
                    <input type = "color" class = "project-colors" value = "${project.color}"/>
                    <span class = "project-spans">
                        <img class = "project-spans-images" src = "${project.icon}" alt = "Icon">
                        ${project.name}
                    </span>
                    <div class = "project-langs-div">
                        ${langs}
                    </div>
                </div>
            </button>
        </div>
        `;
    };
    const projectsMain = document.querySelector("#projects-main-div");
    projectsMain.innerHTML = projectsText;
};