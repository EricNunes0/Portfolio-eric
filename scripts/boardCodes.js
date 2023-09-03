const arrowL = `&#60;`;
const arrowR = `&#62;`;

function spanWord({word, color, italic}) {
    if(italic) {
        if(italic === true) {    
            return `<span class = "board-code-span light ${color} italic">${word}</span>`;
        };
    };
    return `<span class = "board-code-span light ${color}">${word}</span>`;
};

const codesToWrite = [
    {
        "query": "#code-front-0",
        "texts": [
            {
                "text": `${arrowL}!${spanWord({word: `DOCTYPE`, color: `blue`})} ${spanWord({word: `html`, color: `cyan`})}${arrowR}`,
                "tabs": 0
            },
            {
                "text": `${arrowL}${spanWord({word: `html`, color: `blue`})} ${spanWord({word: `lang`, color: `cyan`, italic: true})}${spanWord({word: `=`, color: `white`})}${spanWord({word: `\"pt-br\"`, color: `brown`})}${arrowR}`,
                "tabs": 0
            },
            {
                "text": `${arrowL}${spanWord({word: `head`, color: `blue`})}${arrowR}`,
                "tabs": 1
            },
            {
                "text": `${arrowL}${spanWord({word: `meta`, color: `blue`})} ${spanWord({word: `charset`, color: `cyan`, italic: true})}${spanWord({word: `=`, color: `white`})}${spanWord({word: `\"UTF-8\"`, color: `brown`})}${arrowR}`,
                "tabs": 2
            },
            {
                "text": `${arrowL}${spanWord({word: `title`, color: `blue`})}${arrowR}HTML${arrowL}/${spanWord({word: `title`, color: `blue`})}${arrowR}`,
                "tabs": 2
            },
            {
                "text": `${arrowL}${spanWord({word: `link`, color: `blue`})} ${spanWord({word: `rel`, color: `cyan`, italic: true})}${spanWord({word: `=`, color: `white`})}${spanWord({word: `\"stylesheet\"`, color: `brown`})} ${spanWord({word: `href`, color: `cyan`, italic: true})}${spanWord({word: `=`, color: `white`})}${spanWord({word: `\"style.css\"`, color: `brown`})}${arrowR}`,
                "tabs": 2
            },
            {
                "text": `${arrowL}/${spanWord({word: `head`, color: `blue`})}${arrowR}`,
                "tabs": 1
            },
            {
                "text": `${arrowL}${spanWord({word: `body`, color: `blue`})}${arrowR}`,
                "tabs": 1
            },
            {
                "text": `${arrowL}${spanWord({word: `p`, color: `blue`})} ${spanWord({word: `id`, color: `cyan`, italic: true})}${spanWord({word: `=`, color: `white`})}${spanWord({word: `\"id-name\"`, color: `brown`})}${arrowR}Olá, Mundo!${arrowL}/${spanWord({word: `p`, color: `blue`})}${arrowR}`,
                "tabs": 2
            },
            {
                "text": `${arrowL}/${spanWord({word: `body`, color: `blue`})}${arrowR}`,
                "tabs": 1
            },
            {
                "text": `${arrowL}/${spanWord({word: `html`, color: `blue`})}${arrowR}`,
                "tabs": 0
            }
        ]
    },
    {
        "query": "#code-front-1",
        "texts": [
            {
                "text": `${spanWord({word: `body`, color: `yellow1`})} ${spanWord({word: `{`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `background-color`, color: `css-cyan`})}${spanWord({word: `:`, color: `css-twodots`})} ${spanWord({word: `white`, color: `css-value`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `}`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": ``,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `#id-name`, color: `yellow2`, italic: true})} ${spanWord({word: `{`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `color`, color: `css-cyan`})}${spanWord({word: `:`, color: `css-twodots`})} ${spanWord({word: `black`, color: `css-value`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `}`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": ``,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `.class-names`, color: `yellow2`, italic: true})} ${spanWord({word: `{`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `font-family`, color: `css-cyan`})}${spanWord({word: `:`, color: `css-twodots`})} ${spanWord({word: `montserrat`, color: `css-value`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `}`, color: `yellow0`})}`,
                "tabs": 0
            }
        ]
    },
    {
        "query": "#code-front-2",
        "texts": [
            {
                "text": `${spanWord({word: `window`, color: `js-cyan0`})}.${spanWord({word: `onload`, color: `js-white1`})} ${spanWord({word: `=`, color: `white`})} ${spanWord({word: `function`, color: `js-blue0`})} ${spanWord({word: `welcomeMessage`, color: `js-cyan1`})}${spanWord({word: `()`, color: `yellow0`})} ${spanWord({word: `{`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `let`, color: `js-blue0`})} name ${spanWord({word: `=`, color: `white`})} ${spanWord({word: `document`, color: `js-blue1`})}.${spanWord({word: `getElementById`, color: `js-cyan1`})}${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `\"id-name\"`, color: `brown`})}${spanWord({word: `)`, color: `yellow0`})};`,
                "tabs": 1
            },
            {
                "text": `name.innerHTML ${spanWord({word: `=`, color: `white`})} ${spanWord({word: `\"Hello World!\"`, color: `brown`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `alert`, color: `css-cyan`})}${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `\"Seja bem-vindo!\"`, color: `brown`})}${spanWord({word: `)`, color: `yellow0`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `}`, color: `yellow0`})}`,
                "tabs": 0
            }
        ]
    },
    {
        "query": "#code-back-0",
        "texts": [
            {
                "text": `${spanWord({word: `const`, color: `js-blue0`})} ${spanWord({word: `express`, color: `js-cyan0`})} ${spanWord({word: `=`, color: `white`})} ${spanWord({word: `require`, color: `js-cyan1`})}${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `\"express\"`, color: `brown`})}${spanWord({word: `)`, color: `yellow0`})};`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `const`, color: `js-blue0`})} ${spanWord({word: `app`, color: `js-cyan0`})} ${spanWord({word: `=`, color: `white`})} ${spanWord({word: `express`, color: `js-cyan1`})}${spanWord({word: `()`, color: `yellow0`})};`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `const`, color: `js-blue0`})} ${spanWord({word: `port`, color: `js-cyan0`})} ${spanWord({word: `=`, color: `white`})} ${spanWord({word: `3000`, color: `green-purple`})};`,
                "tabs": 0
            },
            {
                "text": ``,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `app`, color: `js-cyan0`})}.${spanWord({word: `get`, color: `lightyellow-green`})}${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `\"\\\"`, color: `brown`})}, ${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `req`, color: `black-orange`})}, ${spanWord({word: `res`, color: `black-orange`})}${spanWord({word: `)`, color: `yellow0`})} ${spanWord({word: `=>`, color: `white`})} ${spanWord({word: `{`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `res`, color: `black-orange`})}.send${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `\"Olá, mundo!\"`, color: `brown`})}${spanWord({word: `)`, color: `yellow0`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `})`, color: `yellow0`})};`,
                "tabs": 0
            },
            {
                "text": ``,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `app`, color: `js-cyan0`})}.${spanWord({word: `listen`, color: `lightyellow-green`})}${spanWord({word: `(`, color: `yellow0`})}process.env.${spanWord({word: `PORT`, color: `js-cyan0`})} ${spanWord({word: `||`, color: `white`})} ${spanWord({word: `port`, color: `js-cyan0`})}, ${spanWord({word: `()`, color: `yellow0`})} ${spanWord({word: `=>`, color: `white`})} ${spanWord({word: `{`, color: `yellow0`})}`,
                "tabs": 0
            },
            {
                "text": `${spanWord({word: `console`, color: `js-blue1`})}.${spanWord({word: `log`, color: `lightyellow-green`})}${spanWord({word: `(`, color: `yellow0`})}${spanWord({word: `\`Servidor ligado na porta`, color: `brown`})} ${spanWord({word: `\${`, color: `yellow-green`})}${spanWord({word: `port`, color: `js-cyan0`})}${spanWord({word: `}`, color: `yellow-green`})}${spanWord({word: `!\``, color: `brown`})}${spanWord({word: `)`, color: `yellow0`})};`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `})`, color: `yellow0`})};`,
                "tabs": 0
            }
        ]
    },
    {
        "query": "#code-back-1",
        "texts": [
            {
                "text": `${arrowL}?php`,
                "tabs": 0
            },
            {
                "text": `echo \"Olá, mundo!\";`,
                "tabs": 1
            },
            {
                "text": `?${arrowR}`,
                "tabs": 0
            }
        ]
    }
];

for(const code of codesToWrite) {
    let query = document.querySelector(code.query);
    let txts = [];
    code.texts.forEach((text) => {
        txts.push(`<span class = "board-code-spans light" style = "margin-left: calc(var(--board-tab-width) * ${text.tabs});">${text.text}</span>`)
    });
    let text = txts.join(`<br>`);
    if(query) {
        query.innerHTML = `<span class = "board-code-main-spans">${text}</span>`;
    };
};