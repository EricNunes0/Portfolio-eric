export default function Experiences({theme}) {
    const experiences = [
        {
            title: "Aprendiz de Auxiliar de Logística",
            date: "02/2024 - 03/2025",
            icon: "images/experiences/transriver.png",
            company: "Transriver",
            description: "Obtive experiência como analista de licitação, onde pude entender desde os conceitos fundamentais de licitações, até a participação ativa nas mesmas. Minhas atividades incluiam a pesquisa por editais, controle de certidões e separação de documentos editalicios, lances e pesquisa de preços. Ademais, trabalhei com Corel Draw para edição de adesivos e uma máquina de recorte eletrônico Mimaki."
        }
    ]

    let experiencesLeft = [];
    let experiencesCenter = [];
    let experiencesRight = [];
    
    for(const experience of experiences) {
        let newLeftSeparator = (<div className="experiences-left-separators">
            <h5 className={`title4 text-align-right ${theme}`}>{experience.title}</h5>
            <h6 className={`title6 text-align-right ${theme}`}>{experience.date}</h6>
        </div>);

        // Center
        let newCenterIconDiv = (<div className={`experiences-icon-divs ${theme}`}>
            <img className="experiences-icons" src={experience.icon}></img>
        </div>);

        // Right
        let newRightSeparator = (<div className="experiences-right-separators">
            <h5 className={`title5 text-align-left ${theme}`}>{experience.company}</h5>
            <p className={`experiences-descriptions text-align-justify ${theme}`}>{experience.description}</p>
        </div>);

        experiencesLeft.push(newLeftSeparator);
        experiencesCenter.push(newCenterIconDiv);
        
        if(experiences.indexOf(experience) < experiences.length - 1) {
            let newCenterProgress = (<div className={`experiences-progress ${theme}`}></div>);
            experiencesCenter.push(newCenterProgress);
        }
        experiencesRight.push(newRightSeparator);
    }

    return (
        <div id="experiences-main">
            <div id="experiences-left">{experiencesLeft}</div>
            <div id="experiences-center">{experiencesCenter}</div>
            <div id="experiences-right">{experiencesRight}</div>
        </div>
    )
}