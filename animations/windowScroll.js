const aboutMe = document.querySelector("#about-me");

const scrolls = [
    {
        "query": "#about-me",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#aboutme-description",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#knowledges-div-front",
        "animation": "KnowledgesIcons 0.5s linear"
    },
    {
        "query": "#knowledges-div-back",
        "animation": "KnowledgesIcons 0.5s linear"
    },
    {
        "query": "#knowledges-div-db",
        "animation": "KnowledgesIcons 0.5s linear"
    },
    {
        "query": "#knowledges-div-tools",
        "animation": "KnowledgesIcons 0.5s linear"
    }
];

window.addEventListener("scroll", () => {
    let screenHeight = screen.height;

    for(const scroll of scrolls) {
        const query = document.querySelector(scroll.query);
        const queryOffsets = query.getBoundingClientRect();
        const queryTop = queryOffsets.top;
        if(queryTop < (screenHeight - (screenHeight / 3.75))) {
            query.style.opacity = 1;
            query.style.animation = scroll.animation;
        } else {
            query.style.animtion = `none`;
            query.style.opacity = 0;
            query.style.removeProperty(`animation`);
        }
    };
});