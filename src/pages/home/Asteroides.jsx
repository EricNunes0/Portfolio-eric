import languagesJSON from "../../jsons/languages.json";

export default function Asteroides({theme}) {
    let asteroides = [];
    let listKeys = Object.keys(languagesJSON);
    let totalKeys = listKeys.length;
    let rotateExp = 360 / totalKeys;
    let rotateDeg = 0;
    for(const key of listKeys) {
        const asteroide = (<div className={`intro-image-asteroides ${theme}`} style={{backgroundImage: `url("${languagesJSON[key].icon}")`, transform: `rotate(${rotateDeg}deg)`}}></div>);
        asteroides.push(asteroide);
        rotateDeg += rotateExp;
    };    
    return (
        asteroides
    )
};