import languagesJSON from "../../jsons/languages.json";

export default function Asteroides({theme}) {
    let asteroides = [];
    let listKeys = Object.keys(languagesJSON);
    let totalKeys = listKeys.length;
    let rotateExp = 360 / totalKeys;
    let rotateDeg = 0;
    for(const key of listKeys) {
        //if(listKeys.indexOf(key) == 0) { /* Apagar linha */
        const asteroide = (<div className={`intro-image-asteroides ${theme}`} style={{backgroundImage: `url("${languagesJSON[key].icon}")`, animationDelay: `${(listKeys.indexOf(key) * 20) / listKeys.length}s`, transform: `rotate(${rotateDeg}deg)`}}></div>);
        asteroides.push(asteroide);
        rotateDeg += rotateExp;
        //} /* Apagar linha */
    };    
    return (
        asteroides
    )
};