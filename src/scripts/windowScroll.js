/*const scrolls = [
    {
        "query": "#about-me",
        "type": "id",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#aboutme-description",
        "type": "id",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#knowledges-header-title",
        "type": "id",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#knowledges-header-description",
        "type": "id",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#knowledges-div-front",
        "type": "id",
        "animation": "KnowledgesIcons 0.5s ease-out"
    },
    {
        "query": "#knowledges-div-back",
        "type": "id",
        "animation": "KnowledgesIcons 0.5s ease-out"
    },
    {
        "query": "#knowledges-div-db",
        "type": "id",
        "animation": "KnowledgesIcons 0.5s ease-out"
    },
    {
        "query": "#knowledges-div-tools",
        "type": "id",
        "animation": "KnowledgesIcons 0.5s ease-out"
    },
    {
        "query": "#projects-title",
        "type": "id",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#projects-main-description",
        "type": "id",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": ".aboutme-divs",
        "type": "class",
        "animation": "RevealTextTop var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": ".project-divs",
        "type": "class",
        "animation": "RevealTextTop var(--reveal-text-duration) var(--reveal-text-timing)"
    }
];

export default function handleQueryAnimation(query, scroll) {
    let screenHeight = screen.height;
    const queryOffsets = query.getBoundingClientRect();
    const queryTop = queryOffsets.top;
    if(queryTop < (screenHeight - (screenHeight / 3.8))) {
        query.style.opacity = 1;
        if(query.style.animation.length === 0) {
            query.style.animation = scroll.animation;
        };
    } else {
        query.style.animation = `none`;
        query.style.opacity = 0;
        query.style.removeProperty(`animation`);
    };
};

window.addEventListener("scroll", () => {
    for(const scroll of scrolls) {
        switch(scroll.type) {
            case "id":
                let query = document.querySelector(scroll.query);
                if(query) {
                    handleQueryAnimation(query, scroll);
                };
                break;
            case "class":
                let queryAll = document.querySelectorAll(scroll.query);
                if(queryAll) {
                    for(let query of queryAll) {
                        handleQueryAnimation(query, scroll);
                    };
                };
                break;
        };
    };
});*/