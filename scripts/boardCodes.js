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
        "query": "#code-0",
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
        "query": "#code-1",
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
        "query": "#code-2",
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
                "text": `name.innerHTML ${spanWord({word: `=`, color: `white`})} \"Hello World!\";`,
                "tabs": 1
            },
            {
                "text": `alert(\"Seja bem-vindo!\");`,
                "tabs": 1
            },
            {
                "text": `${spanWord({word: `}`, color: `yellow0`})}`,
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