import closeModal from "../../scripts/closeModal";
import ModalLangs from "./ModalLangs";

export default function Modal({theme, modalOpen, setModalOpen, modalProject}) {
    return (
        <div className = "hide" id = "modal-container">
            <div className = {`${theme}`} id = "modal-area">
                <div id = "modal-close-area">
                    <button type = "button" className = {`${theme}`} id = "modal-close-button" onClick = {() => {closeModal()}}>
                        <img className = {`${theme}`} id = "modal-close-button-image" src = "svgs/close.svg"></img>
                    </button>
                </div>
                <div id = "modal-header">
                    <div id = "modal-icon-div">
                        <img id = "modal-icon" src = ""></img>
                    </div>
                    <div id = "modal-title-div">
                        <h3 className = {`title3 ${theme}`} id = "modal-title">Título</h3>
                    </div>
                </div>
                <div id = "modal-main">
                    <img id = "modal-image" src = ""></img>
                    <div id = "modal-langs-div"></div>
                    <ModalLangs theme={theme} project={modalProject}></ModalLangs>
                    <h4 className = {`title4 ${theme}`} id = "modal-description-title">Descrição:</h4>
                    <p className = {`${theme}`} id = "modal-description">Descrição</p>
                </div>
                <div id = "modal-footer">
                    <div id = "modal-main-link-div">
                        <div className = "modal-links-divs">
                            <a className = {`modal-links ${theme}`} id = "modal-link-redirect" href = "" target = "_blank">Ver projeto</a>
                        </div>
                        <div className = "modal-links-divs">
                            <a className = {`modal-links ${theme}`} id = "modal-link-rep" href = "" target = "_blank">Ver repositório</a>
                        </div>
                        <div className = "modal-links-divs">
                            <a className = {`modal-links ${theme}`} id = "modal-link-post" href = "" target = "_blank">Post no LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};