import languagesJSON from "../../jsons/languages.json";
import projectsJSON from "../../jsons/projects.json";
import styled, { keyframes } from 'styled-components';
import EditModal from "../../scripts/EditModal";

function animationKeyframes(images) {
    let animation;
    if(images) {
        const step = 100 / (images.length);
        let frames = `0%, 100% {background-image: url('${images[0]}');}\n`;
        images.slice(1).forEach((img, i) => {
          const percent = step * (i + 1);
          frames += `${percent}% {background-image: url('${img}');}\n`;
        });
        animation = keyframes`${frames}`;
    }
    return animation;
}

export default function Projects({theme, setProject}) {
    const languages = languagesJSON;
    const projects = projectsJSON.projects;
    let projectsDivs = [];
    for(const project of projects) {
        let langs = [];
        for(const lang of project.languages) {
            if(languages[lang]) {
                langs.push(
                    <div className = "project-lang">
                        <img className = {`lang-images ${theme}`} src = {languages[lang].icon} alt = {lang}/>
                    </div>
                );
            }
        };

        let projectLinksAnimation = keyframes`
            0%, 100% {background-position: 0px;}
            50% {background-position: -20px;}
        `;
        

        const ProjectLink = styled.div`
            animation-name: ${animationKeyframes(project.backgroundImages)}, ${projectLinksAnimation};
        `;

        projectsDivs.push(
            <div className = "project-divs move move-top">
                <button type = "button" className = "project-main-buttons" id = {`project-button-${project.id}`} onClick = {() => {EditModal({project: project, setProject: setProject})}}>
                    <ProjectLink className = "project-links" id = {`project-link-${project.id}`}>
                        <input type = "color" className = "project-colors" value = {project.color}/>
                        <span className = {`project-spans ${theme}`}>
                            <img className = "project-spans-images" src = {project.icon} alt = "Icon"></img>
                            <h6 className = {`project-spans-titles title6 ${theme}`} style={{marginBottom: 0}}>{project.name}</h6>
                        </span>
                        <div className = {`project-langs-div ${theme}`}>
                            {langs}
                        </div>
                    </ProjectLink>
                </button>
            </div>
        );
    };
    return (
        projectsDivs
    )
};