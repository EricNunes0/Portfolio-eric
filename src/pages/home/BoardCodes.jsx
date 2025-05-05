import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

let codes = {
    html: [
        [
            {
                text: `<!`,
                color: "black-white"
            },
            {
                text: `DOCTYPE`,
                color: "blue-pink"
            },
            {
                text: `html`,
                color: "cyan-green",
                italic: true,
                spacesBefore: 1
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white"
            },
            {
                text: `html`,
                color: "blue-pink"
            },
            {
                text: `lang`,
                color: "cyan-green",
                italic: true,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink"
            },
            {
                text: `\"pt-br\"`,
                color: "brown-yellow"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white",
                tabs: 1
            },
            {
                text: `head`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white",
                tabs: 2
            },
            {
                text: `meta`,
                color: "blue-pink"
            },
            {
                text: `charset`,
                color: "cyan-green",
                italic: true,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink"
            },
            {
                text: `\"UTF-8\"`,
                color: "brown-yellow"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white",
                tabs: 2
            },
            {
                text: `title`,
                color: "blue-pink"
            },
            {
                text: `>HTML</`,
                color: "black-white"
            },
            {
                text: `title`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white",
                tabs: 2
            },
            {
                text: `link`,
                color: "blue-pink"
            },
            {
                text: `rel`,
                color: "cyan-green",
                italic: true,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink"
            },
            {
                text: `\"stylesheet\"`,
                color: "brown-yellow"
            },
            {
                text: `href`,
                color: "cyan-green",
                italic: true,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink"
            },
            {
                text: `\"style.css\"`,
                color: "brown-yellow"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `</`,
                color: "black-white",
                tabs: 1
            },
            {
                text: `head`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white",
                tabs: 1
            },
            {
                text: `body`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `<`,
                color: "black-white",
                tabs: 2
            },
            {
                text: `p`,
                color: "blue-pink"
            },
            {
                text: `id`,
                color: "cyan-green",
                italic: true,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink"
            },
            {
                text: `\"id-name\"`,
                color: "brown-yellow"
            },
            {
                text: `>Olá, Mundo!</`,
                color: "black-white"
            },
            {
                text: `p`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `</`,
                color: "black-white",
                tabs: 1
            },
            {
                text: `body`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
        [
            {
                text: `</`,
                color: "black-white"
            },
            {
                text: `html`,
                color: "blue-pink"
            },
            {
                text: `>`,
                color: "black-white"
            }
        ],
    ],
    css: [
        [
            {
                text: `body`,
                color: "brown-pink"
            },
            {
                text: `{`,
                color: "black-white",
                spacesBefore: 1
            }
        ],
        [
            {
                text: `background-color`,
                color: "cyan",
                tabs: 1
            },
            {
                text: `:`,
                color: "black-pink"
            },
            {
                text: `white`,
                color: "black-purple",
                spacesBefore: 1
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `}`,
                color: "black-white"
            }
        ],
        [
            {
                text: "",
                color: ""
            }
        ],
        [
            {
                text: `#id-name`,
                color: "brown-green"
            },
            {
                text: `{`,
                color: "black-white",
                spacesBefore: 1
            }
        ],
        [
            {
                text: `color`,
                color: "cyan",
                tabs: 1
            },
            {
                text: `:`,
                color: "black-pink"
            },
            {
                text: `black`,
                color: "black-purple",
                spacesBefore: 1
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `}`,
                color: "black-white"
            }
        ],
        [
            {
                text: "",
                color: ""
            }
        ],
        [
            {
                text: `.class-names`,
                color: "brown-green"
            },
            {
                text: `{`,
                color: "black-white",
                spacesBefore: 1
            }
        ],
        [
            {
                text: `font-family`,
                color: "cyan",
                tabs: 1
            },
            {
                text: `:`,
                color: "black-pink"
            },
            {
                text: `montserrat`,
                color: "black-purple",
                spacesBefore: 1
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `}`,
                color: "black-white"
            }
        ]
    ],
    js: [
        [
            {
                text: `window`,
                color: "cyan-purple"
            },
            {
                text: `.`,
                color: "black-white"
            },
            {
                text: `onload`,
                color: "black-green"
            },
            {
                text: `=`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `function`,
                color: "blue-pink",
                spacesBefore: 1
            },
            {
                text: `welcomeMessage`,
                color: "cyan-green",
                spacesBefore: 1
            },
            {
                text: `() {`,
                color: "orange-white"
            }
        ],
        [
            {
                text: `let`,
                color: "blue-pink",
                tabs: 1
            },
            {
                text: `name`,
                color: "black-white",
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `document`,
                color: "blue-purple",
                spacesBefore: 1
            },
            {
                text: `.`,
                color: "black-white"
            },
            {
                text: `getElementById`,
                color: "cyan-green"
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `\"id-name\"`,
                color: "brown-yellow"
            },
            {
                text: `)`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `name.innerHTML`,
                color: "black-white",
                tabs: 1
            },
            {
                text: `=`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `\"Hello World\"`,
                color: "brown-yellow",
                spacesBefore: 1
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `alert`,
                color: "cyan",
                tabs: 1
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `\"Seja bem-vindo!\"`,
                color: "brown-yellow"
            },
            {
                text: `)`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `}`,
                color: "orange-white"
            }
        ]
    ],
    nodejs: [
        [
            {
                text: `const`,
                color: `blue-pink`
            },
            {
                text: `express`,
                color: `cyan-purple`,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `require`,
                color: `cyan-green`,
                spacesBefore: 1
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `\"express\"`,
                color: "brown-yellow"
            },
            {
                text: `)`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `const`,
                color: `blue-pink`
            },
            {
                text: `app`,
                color: `cyan-purple`,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `express`,
                color: `cyan-green`,
                spacesBefore: 1
            },
            {
                text: `()`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `const`,
                color: `blue-pink`
            },
            {
                text: `port`,
                color: `cyan-purple`,
                spacesBefore: 1
            },
            {
                text: `=`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `3000`,
                color: `green-purple`,
                spacesBefore: 1
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: "",
                color: ""
            }
        ],
        [
            {
                text: `app`,
                color: `cyan-purple`
            },
            {
                text: `.`,
                color: `black-white`
            },
            {
                text: `get`,
                color: `yellow-green`
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `\"\\\"`,
                color: "brown-yellow"
            },
            {
                text: `,`,
                color: `black-white`
            },
            {
                text: `(`,
                color: "orange-white",
                spacesBefore: 1
            },
            {
                text: `req`,
                color: `black-orange`
            },
            {
                text: `,`,
                color: `black-white`
            },
            {
                text: `res`,
                color: `black-orange`,
                spacesBefore: 1
            },
            {
                text: `)`,
                color: "orange-white"
            },
            {
                text: `=>`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `{`,
                color: "orange-white"
            }
        ],
        [
            {
                text: `res`,
                color: `black-orange`,
                tabs: 1
            },
            {
                text: `.`,
                color: `black-white`
            },
            {
                text: `send`,
                color: `black-green`
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `\"Olá, mundo!\"`,
                color: "brown-yellow"
            },
            {
                text: `)`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `})`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: "",
                color: ""
            }
        ],
        [
            {
                text: `app`,
                color: `cyan-purple`
            },
            {
                text: `.`,
                color: `black-white`
            },
            {
                text: `listen`,
                color: `yellow-green`
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `process.env.`,
                color: "black-white"
            },
            {
                text: `PORT`,
                color: "cyan-purple"
            },
            {
                text: `||`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `port`,
                color: "cyan-purple",
                spacesBefore: 1
            },
            {
                text: `,`,
                color: `black-white`
            },
            {
                text: `()`,
                color: "orange-white",
                spacesBefore: 1
            },
            {
                text: `=>`,
                color: "black-pink",
                spacesBefore: 1
            },
            {
                text: `{`,
                color: "orange-white"
            }
        ],
        [
            {
                text: `console`,
                color: `blue-purple`,
                tabs: 1
            },
            {
                text: `.`,
                color: `black-white`
            },
            {
                text: `log`,
                color: `yellow-green`
            },
            {
                text: `(`,
                color: "orange-white"
            },
            {
                text: `\`Servidor ligado na porta `,
                color: "brown-yellow"
            },
            {
                text: `\${`,
                color: "orange-white",
                spacesBefore: 1
            },
            {
                text: `port`,
                color: "cyan-purple"
            },
            {
                text: `}`,
                color: "orange-white"
            },
            {
                text: `!\``,
                color: "brown-yellow"
            },
            {
                text: `)`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ],
        [
            {
                text: `})`,
                color: "orange-white"
            },
            {
                text: `;`,
                color: "black-white"
            }
        ]
    ],
    php: [
        [
            {
                text: `<?php`,
                color: `blue-pink`
            }
        ],
        [
            {
                text: `echo`,
                color: `blue-pink`,
                tabs: 1
            },
            {
                text: `"Olá, mundo!"`,
                color: `brown-yellow`,
                spacesBefore: 1
            },
            {
                text: `;`,
                color: `black-white`
            }
        ],
        [
            {
                text: `?>`,
                color: `blue-pink`
            }
        ]
    ],
    python: [
        [
            {
                text: `from`,
                color: `purple-pink`
            },
            {
                text: `flask`,
                color: `black-white`,
                spacesBefore: 1
            },
            {
                text: `import`,
                color: `purple-pink`,
                spacesBefore: 1
            },
            {
                text: `Flask`,
                color: `green-cyan`,
                spacesBefore: 1
            }
        ],
        [
            {
                text: `from`,
                color: `purple-pink`
            },
            {
                text: `sql_alchemy`,
                color: `black-white`,
                spacesBefore: 1
            },
            {
                text: `import`,
                color: `purple-pink`,
                spacesBefore: 1
            },
            {
                text: `banco`,
                color: `black-white`,
                spacesBefore: 1
            }
        ],
        [
            {
                text: `from`,
                color: `purple-pink`
            },
            {
                text: `flask_migrate`,
                color: `black-white`,
                spacesBefore: 1
            },
            {
                text: `import`,
                color: `purple-pink`,
                spacesBefore: 1
            },
            {
                text: `Migrate`,
                color: `green-cyan`,
                spacesBefore: 1
            }
        ],
        [
            {
                text: `from`,
                color: `purple-pink`
            },
            {
                text: `models.models`,
                color: `black-white`,
                spacesBefore: 1
            },
            {
                text: `import`,
                color: `purple-pink`,
                spacesBefore: 1
            },
            {
                text: `*`,
                color: `black-pink`,
                spacesBefore: 1
            }
        ],
        [
            {
                text: `from`,
                color: `purple-pink`
            },
            {
                text: `controllers.views`,
                color: `black-white`,
                spacesBefore: 1
            },
            {
                text: `import`,
                color: `purple-pink`,
                spacesBefore: 1
            },
            {
                text: `*`,
                color: `black-pink`,
                spacesBefore: 1
            }
        ],
        [
            {
                text: ``,
                color: ``
            }
        ],
        [
            {
                text: `app`,
                color: `black-white`
            },
            {
                text: `=`,
                color: `black-pink`,
                spacesBefore: 1
            },
            {
                text: `Flask`,
                color: `green-cyan`,
                spacesBefore: 1
            },
            {
                text: `(`,
                color: `orange-white`
            },
            {
                text: `__name__`,
                color: `cyan-white`
            },
            {
                text: `)`,
                color: `orange-white`
            }
        ],
        [
            {
                text: `connection`,
                color: `black-white`
            },
            {
                text: `=`,
                color: `black-pink`,
                spacesBefore: 1
            },
            {
                text: `'postgresql://postgres:exemplo@'`,
                color: `brown-yellow`,
                spacesBefore: 1
            },
            {
                text: `\\`,
                color: `black-pink`,
                spacesBefore: 1
            }
        ],
        [
            {
                text: `'localhost:5432/exemplo'`,
                color: `brown-yellow`,
                tabs: 4.6
            }
        ]
    ]
};

function codeRow(row, tema) {
    let spans = [];
    for(const span of row) {
        spans.push(codeSpan(span, tema));
    }

    return (
        <div className="code-row" style={{height: "25px"}}>
            {spans}
        </div>
    )
}

function codeSpan(span, tema) {
    return (
        <span className={`board-code-span ${tema} ${span.color} ${span.italic ? "italic": ""}`} style={{marginLeft: `${(span.tabs ? span.tabs * 24 : 0) + (span.spacesBefore ? span.spacesBefore * 4 : 0)}px`}}>{span.text}</span>
    );
}

export default function BoardCodes({language}) {
    const { tema } = useContext(ThemeContext);
    let rows = [];
    if(codes[language]) {
        for(const row of codes[language]) {
            rows.push(codeRow(row, tema));
        }
    };

    return (
        rows
    );
}