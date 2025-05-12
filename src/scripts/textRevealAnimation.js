export default function textRevealAnimation() {
    const animations = {
        "move-bottom": "RevealTextBottom var(--reveal-text-duration) var(--reveal-text-timing)",
        "move-left": "RevealTextLeft var(--reveal-text-duration) var(--reveal-text-timing)",
        "move-right": "RevealTextRight var(--reveal-text-duration) var(--reveal-text-timing)",
        "move-top": "RevealTextTop var(--reveal-text-duration) var(--reveal-text-timing)",
    };

    const moveObjects = document.querySelectorAll(".move");
    const screenHeight = window.screen.height;
    for(const query of moveObjects) {
        const hasMoveClass = Array.from(query.classList).find(className =>
            className.startsWith('move-')
        );
        if(hasMoveClass) {
            const queryOffsets = query.getBoundingClientRect();
            const queryTop = queryOffsets.top;
            if(queryTop < (screenHeight - (screenHeight / 3.8))) {
                query.style.opacity = 1;
                if(query.style.animation.length === 0) {
                    query.style.animation = animations[hasMoveClass];
                };
            } else {
                query.style.animation = `none`;
                query.style.opacity = 0;
                query.style.removeProperty(`animation`);
            };
        }
    };

    
    
};