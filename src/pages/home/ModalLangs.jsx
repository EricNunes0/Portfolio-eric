import ModalLang from "./ModalLang";

export default function ModalLangs({theme, project}) {
    let rows = [];
    if(Object.keys(project).length > 0 >= 1) {
        project.languages.forEach((lang) => {
            rows.push(
                <ModalLang theme={theme} lang={lang}></ModalLang>
            );
        });
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "8px"}}>
            {rows}
        </div>
    );
};