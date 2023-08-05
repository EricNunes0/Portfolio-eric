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
        "query": "#knowledges-header-title",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#knowledges-header-description",
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
    },
    {
        "query": "#projects-title",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    },
    {
        "query": "#projects-main-description",
        "animation": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)"
    }
];

window.addEventListener("scroll", () => {
    let screenHeight = screen.height;

    for(const scroll of scrolls) {
        const query = document.querySelector(scroll.query);
        const queryOffsets = query.getBoundingClientRect();
        const queryTop = queryOffsets.top;
        if(queryTop < (screenHeight - (screenHeight / 3.8))) {
            query.style.opacity = 1;
            if(query.style.animation.length === 0) {
                query.style.animation = scroll.animation;
            };
        } else {
            query.style.animtion = `none`;
            query.style.opacity = 0;
            query.style.removeProperty(`animation`);
        }
    };
});