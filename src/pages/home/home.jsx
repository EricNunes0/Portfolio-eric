import React, { useContext, useRef, useState } from "react";
import Asteroides from "./Asteroides";
import BackgroundTriangles from "./BackgroundTriangles";
import BoardCodes from "./BoardCodes";
import Contacts from "./Contacts";
import TypingAnimation from "./TypingAnimation";
import KnowledgesLanguages from "./KnowledgesLanguages";
import Experiences from "./Experiences";
import Projects from "./Projects";
import FooterContacts from "./FooterContacts";
import { ThemeContext } from "../ThemeContext";
import ThemeSelector from "../ThemeSelector";
import boardFileClick from "../../scripts/boardFileClick";
import closeModal from "../../scripts/closeModal";
import scrollUp from "../../scripts/scrollUp";
import scrollScreenTo from "../../scripts/scrollScreenTo";
import Modal from "./Modal";
import navMobileMenu from "../../scripts/navMobileMenu";

import "../../styles/base.css";
import "../../styles/backgroundTriangles.css";
import "../../styles/codeBars.css";
import "../../styles/modals.css";
import "../../styles/mouseAnimation.css";
import "../../styles/nav.css";
import "../../styles/scrollBar.css";
import "../../styles/scrollUp.css";
import "../../styles/sparkleButton.css";
import "../../styles/themeAnimations.css";
import "../../styles/themeSelector.css";
import "../../styles/typing.css"

import "./BoardCodes";
import "../../scripts/closeModal";
import "./Asteroides";
import "./ModalLangs";
import "../../scripts/openModal";
import "../../scripts/EditModal";
import "../../scripts/projectLinks";
import "../../scripts/knowlegdesIconDivs";
import "../../scripts/moonAnimation";
import "../../scripts/scrollScreenTo";
import "../../scripts/sunTrianglesAnimation";
import "../../scripts/windowScroll";
import SparkleButton from "./SparkleButton";

export default function Home() {
    const { tema } = useContext(ThemeContext);
    const [modalProject, setModalProject] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [knowledgesTranslateX, setKnowledgesTranslateX] = useState(0);
    const headerRef = useRef(null);
    const aboutmeRef = useRef(null);
    const knowledgesRef = useRef(null);
    const projectsRef = useRef(null);
    const experiencesRef = useRef(null);
    const footerRef = useRef(null);

    function findMod(i) {
        const mod = ((i % 4) + 4) % 4;
        return mod;
    }

    function getPercentage(i) {
        const base = 150;
        const mod = findMod(i);
        switch (mod) {
          case 0: return `${base}%`;
          case 1: return `${base - 100}%`;
          case 2: return `${-1 * (base - 100)}%`;
          case 3: return `${-1 * base}%`;
        }
    }

    function moveKnowledges(i) {
        setKnowledgesTranslateX(knowledgesTranslateX + i);
    }

    function moveKnowledgesRelative(i) {
        const mod = findMod(knowledgesTranslateX);
        if (i !== mod) {
            setKnowledgesTranslateX(knowledgesTranslateX + (i - mod));
        }
    }

    return (
        <main className = "base">
            <div className = "portfolio-area">
                <div id = "scroll-up-container">
                    <button type = "button" className = "hidden" id = "scroll-up-button" onClick = {() => {scrollUp()}}>
                        <object id = "arrow-scroll-up-svg" data = "svgs/arrowScrollUp.svg" width = "20" height = "20"></object>
                    </button>
                </div>
                <Modal theme={tema} modalOpen={modalOpen} setModalOpen={setModalOpen} modalProject={modalProject}></Modal>
                <div className = {`nav-div`}>
                    <nav className = {`nav-desktop flex-center ${tema}`}>
                        <div className = "nav-flex">
                            <ThemeSelector id={`desktop`} theme={tema} mobile={false}></ThemeSelector>
                            <section className = "nav-buttons-section">
                                <div className = "nav-buttons-div">
                                    <ul className = "nav-buttons-list">
                                        <button type = "button" onClick = {() => {scrollScreenTo(headerRef)}} className = {`nav-buttons ${tema}`}>
                                            <li className = {`nav-buttons-li ${tema}`}>Início</li>
                                        </button>
                                        <button type = "button" onClick = {() => {scrollScreenTo(aboutmeRef)}} className = {`nav-buttons ${tema}`}>
                                            <li className = {`nav-buttons-li ${tema}`}>Sobre</li>
                                        </button>
                                        <button type = "button" onClick = {() => {scrollScreenTo(knowledgesRef)}} className = {`nav-buttons ${tema}`}>
                                            <li className = {`nav-buttons-li ${tema}`}>Conhecimentos</li>
                                        </button>
                                        <button type = "button" onClick = {() => {scrollScreenTo(experiencesRef)}} className = {`nav-buttons ${tema}`}>
                                            <li className = {`nav-buttons-li ${tema}`}>Experiência</li>
                                        </button>
                                        <button type = "button" onClick = {() => {scrollScreenTo(projectsRef)}} className = {`nav-buttons ${tema}`}>
                                            <li className = {`nav-buttons-li ${tema}`}>Projetos</li>
                                        </button>
                                        <button type = "button" onClick = {() => {scrollScreenTo(footerRef)}} className = {`nav-buttons ${tema}`}>
                                            <li className = {`nav-buttons-li ${tema}`}>Contato</li>
                                        </button>
                                    </ul>
                                </div>
                            </section>
                            <Contacts theme={tema}></Contacts>
                        </div>
                    </nav>
                    <nav className = {`nav-mobile`}>
                        <header className = {`nav-header ${tema}`}>
                            <button className = "nav-header-mobile-button closed" id = "nav-button" onClick = {() => navMobileMenu()}>
                                <img className = {`nav-header-mobile-button-image closed ${tema}`} id = "nav-button-image" src = "svgs/menu.svg"/>
                            </button>
                            <ThemeSelector id={`mobile`} theme={tema} mobile={true}></ThemeSelector>
                        </header>
                        <div className = {`nav-mobile-menu closed ${tema}`} id = "nav-mobile-menu">
                            <ul className = "nav-menu-list">
                                <button type = "button" className = {`nav-menu-items ${tema}`} onClick = {() => {scrollScreenTo(headerRef)}}>Início</button>
                                <button type = "button" className = {`nav-menu-items ${tema}`} onClick = {() => {scrollScreenTo(aboutmeRef)}}>Sobre</button>
                                <button type = "button" className = {`nav-menu-items ${tema}`} onClick = {() => {scrollScreenTo(knowledgesRef)}}>Conhecimentos</button>
                                <button type = "button" className = {`nav-menu-items ${tema}`} onClick = {() => {scrollScreenTo(experiencesRef)}}>Experiência</button>
                                <button type = "button" className = {`nav-menu-items ${tema}`} onClick = {() => {scrollScreenTo(projectsRef)}}>Projetos</button>
                                <button type = "button" className = {`nav-menu-items ${tema}`} onClick = {() => {scrollScreenTo(footerRef)}}>Contato</button>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div id = "portfolio-main">
                    <section ref={headerRef} className = {`portfolio-header ${tema}`} id = "portfolio-header-header">
                        <div id = "background">
                            <BackgroundTriangles amount={40}></BackgroundTriangles>
                        </div>
                        <div id = "portfolio-scenary">
                            <img id = "scenary-earth" src = "images/img_planet.png" alt = "Earth"></img>
                            <img id = "scenary-satelite" src = "images/img_satelite.png" alt = "Satelite"></img>
                            <div className = "arrow-div">
                                <img className = {`arrow-image ${tema}`} src = "images/img_arrow.png"/>
                            </div>
                        </div>
                        <div className = "portfolio-intro">
                            <div className = "portfolio-intro-flex">
                                <section id = "header-title-section">
                                    <TypingAnimation className={`typing-text-1 ${tema}`} type={1} text={"Olá, meu nome é"} delay={0} interval={0.05}></TypingAnimation>
                                </section>
                                <section id = "name-section">
                                    <TypingAnimation className={`typing-text-2 ${tema}`} type={2} text={"Eric Nunes"} delay={1} interval={0.15}></TypingAnimation>
                                </section>
                                <section id = "header-code-section">
                                    <TypingAnimation className={`typing-text-3 ${tema}`} type={3} text={"Desenvolvedor Web"} delay={3} interval={0.06}></TypingAnimation>
                                </section>
                                <section className = "intro-buttons-section">
                                    <a className = "button-links" href = "https://www.linkedin.com/in/eric-nunes-ramalho-58a146208/" target = "_blank">
                                        <SparkleButton theme={tema} text={`Linkedin`} icon={`svgs/contacts/linkedin.svg`}></SparkleButton>
                                    </a>
                                    <a className = "button-links" href = "https://github.com/EricNunes0" target = "_blank">
                                        <SparkleButton theme={tema} text={`Github`} icon={`svgs/contacts/github.svg`}></SparkleButton>
                                    </a>
                                </section>
                            </div>
                            <button className="display-flex" id = "scenary-moon-button">
                                <img id = "scenary-moon" src = "images/img_moon.png" alt = "Moon"></img>
                            </button>
                        </div>
                    </section>
                    <section ref={aboutmeRef} className = {`container1 ${tema}`} id = "portfolio-aboutme-header">
                        <div className = {`aboutme-container ${tema}`} id = "aboutme-container">
                            <div className = "portfolio-aboutme-div">
                                <div className="title-div">
                                    <h1 className = {`title1 text-align-center move move-left ${tema}`} id = "about-me">Sobre mim</h1>
                                    <h5 className = {`title5 text-align-center move move-left ${tema}`} id = "aboutme-description">Conheça um pouco sobre mim</h5>
                                </div>
                                <div id = "aboutme-main">
                                    <div className = "intro-image-div">
                                        <a id = "intro-image-link" href = "https://www.linkedin.com/in/eric-nunes-ramalho-58a146208/" target="_blank">
                                            <img className = {`intro-image move move-left ${tema}`} src = "images/img_eric.jpg"/>
                                            <Asteroides theme={tema}></Asteroides>
                                        </a>
                                    </div>
                                    <div id = "separator-div">
                                        <div id = "separators-div">
                                            <span className = "separator-lines"></span>
                                            <span className = "separator-circles"></span>
                                            <span className = "separator-lines dotted"></span>
                                            <span className = "separator-circles"></span>
                                            <span className = {`separator-lines ${tema}`} id = "separator-to-curriculum"></span>
                                        </div>
                                        <div id = "curriculo-div">
                                            <a className = "curriculo-link" target = "_blank" href = "https://drive.google.com/file/d/1W1mKAolqfg4u4YODwTvpCZIBIZy6FSsp/view?usp=sharing">
                                                <button type = "button" className = {`curriculo-button ${tema}`}>
                                                    Meu currículo
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className = "aboutme-description-div">
                                        <div className = {`aboutme-divs move move-right`}>
                                            <div className = "aboutme-header-divs">
                                                <div className = {`aboutme-icon-divs ${tema}`}>
                                                    <img className = {`aboutme-icons ${tema}`} src = "svgs/user.svg"></img>
                                                </div>
                                                <h4 className = {`title4 text-align-center margin-top-10px ${tema}`}>Quem sou eu?</h4>
                                            </div>
                                            <div className = "aboutme-text-divs">
                                                <p className = {`aboutme-texts ${tema}`} id="aboutme-who">Olá, meu nome é Eric Nunes Ramalho. Sou um jovem de {new Date().getFullYear() - new Date("2004-05-26").getFullYear()} anos, natural do Rio de Janeiro, Brasil, estudante do curso de Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá.</p>
                                            </div>
                                        </div>
                                        <div className = {`aboutme-divs move move-right`}>
                                            <div className = "aboutme-header-divs">
                                                <div className = {`aboutme-icon-divs ${tema}`}>
                                                    <img className = {`aboutme-icons ${tema}`} src = "svgs/code.svg"></img>
                                                </div>
                                                <h4 className = {`title4 text-align-center margin-top-10px ${tema}`}>Do que gosto?</h4>
                                            </div>
                                            <div className = "aboutme-text-divs">
                                                <p className = {`aboutme-texts ${tema}`}>Sou uma pessoa simples que ama aprender coisas novas, em especial sobre a área de desenvolvimento web e aplicações, a qual tenho um forte desejo de seguir carreira.</p>
                                            </div>
                                        </div>
                                        <div className = {`aboutme-divs move move-right`}>
                                            <div className = "aboutme-header-divs">
                                                <div className = {`aboutme-icon-divs ${tema}`}>
                                                    <img className = {`aboutme-icons ${tema}`} src = "svgs/briefcase.svg"></img>
                                                </div>
                                                <h4 className = {`title4 text-align-center margin-top-10px ${tema}`}>O que busco?</h4>
                                            </div>
                                            <div className = "aboutme-text-divs">
                                                <p className = {`aboutme-texts ${tema}`}>Estou em busca de um estágio/emprego a fim de contribuir na área que me for designada, utilizando meus conhecimentos adquiridos em projetos pessoais e buscando sempre aprender coisas novas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={knowledgesRef} className = {`container1 ${tema}`} id = "portfolio-knowledges">
                        <div id = "knowledges-area">
                            <div className="title-div">
                                <h1 className = {`title1 text-align-center move move-top ${tema}`} id = "knowledges-header-title">Conhecimentos</h1>
                                <h5 className = {`title5 text-align-center move move-top ${tema}`} id = "knowledges-header-description">Confira todas as área e tecnologias que possuo conhecimento</h5>
                            </div>
                            <div id = "knowledges-main-div" style={{backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius: "10px"}}>
                                <div id="move-header">
                                    <button type="button" className={`move-index ${tema} ${findMod(knowledgesTranslateX) == 0 ? `active` : ``}`} onClick={() => {moveKnowledgesRelative(0)}}></button>
                                    <button type="button" className={`move-index ${tema} ${findMod(knowledgesTranslateX) == 1 ? `active` : ``}`} onClick={() => {moveKnowledgesRelative(1)}}></button>
                                    <button type="button" className={`move-index ${tema} ${findMod(knowledgesTranslateX) == 2 ? `active` : ``}`} onClick={() => {moveKnowledgesRelative(2)}}></button>
                                    <button type="button" className={`move-index ${tema} ${findMod(knowledgesTranslateX) == 3 ? `active` : ``}`} onClick={() => {moveKnowledgesRelative(3)}}></button>
                                </div>
                                <button type="button" className={`move-buttons ${tema}`} id="left" onClick={() => {moveKnowledges(-1)}}>
                                    <img className="move-buttons-icons" src="svgs/arrowLeft.svg"></img>
                                </button>
                                <button type="button" className={`move-buttons ${tema}`} id="right" onClick={() => {moveKnowledges(1)}}>
                                    <img className="move-buttons-icons" src="svgs/arrowLeft.svg"></img>
                                </button>
                                <main style={{transform: `translateX(${getPercentage(knowledgesTranslateX)})`}}>
                                    <section>
                                        <div className = "knowledges-articles">
                                            <div className = "knowledges-icon-areas">
                                                <div className = {`knowledges-icon-divs move move-top ${tema}`} id = "knowledges-div-front">
                                                    <img className = {`knowledges-icons ${tema}`} src = "images/img_client.png"></img>
                                                </div>
                                            </div>
                                            <h3 className = {`title3 text-align-center ${tema}`}>Front-End</h3>
                                            <h6 className = {`title6 text-align-center ${tema}`}>Gosto de tirar minhas ideias do papel e colocá-las no navegador.</h6>
                                        </div>
                                        <div className = "knowledges-divs">
                                            <div className = "knowledges-left">
                                                <div className = {`code-boards ${tema}`} id = "front-end">
                                                    <div className = "code-board-headers">
                                                        <div className = "board-header-flex">
                                                            <div className = "board-header-circle-divs">
                                                                <div className = "board-circle-divs">
                                                                    <span className = "board-circles red"></span>
                                                                </div>
                                                                <div className = "board-circle-divs">
                                                                    <span className = "board-circles yellow"></span>
                                                                </div>
                                                                <div className = "board-circle-divs">
                                                                    <span className = "board-circles green"></span>
                                                                </div>
                                                            </div>
                                                            <div className = "board-header-filename-divs">
                                                                <button className = {`board-filename-buttons front ${tema} selected`} id = "filename-button-front-0" onClick = {() => {boardFileClick({id: 0, type: 'front'})}}>
                                                                    <span className = {`board-filenames ${tema}`}>index.html</span>
                                                                </button>
                                                                <button className = {`board-filename-buttons front ${tema}`} id = "filename-button-front-1" onClick = {() => {boardFileClick({id: 1, type: 'front'})}}>
                                                                    <span className = {`board-filenames ${tema}`}>style.css</span>
                                                                </button>
                                                                <button className = {`board-filename-buttons front ${tema}`} id = "filename-button-front-2" onClick = {() => {boardFileClick({id: 2, type: 'front'})}}>
                                                                    <span className = {`board-filenames ${tema}`}>script.js</span>
                                                                </button>
                                                            </div>
                                                            <div className = "board-empty-divs"></div>
                                                        </div>
                                                    </div>
                                                    <div className = "code-board-bodies">
                                                        <div className = "board-body-flex">
                                                            <div className = "board-number-lines">
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">1</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">2</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">3</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">4</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">5</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">6</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">7</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">8</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">9</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">10</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">11</p>
                                                                </div>
                                                            </div>
                                                            <div className = "board-code-div">
                                                                <code className = "board-codes front show" id = "code-front-0">
                                                                    <BoardCodes language={"html"}></BoardCodes>
                                                                </code>
                                                                <code className = "board-codes front" id = "code-front-1">
                                                                    <BoardCodes language={"css"}></BoardCodes>
                                                                </code>
                                                                <code className = "board-codes front" id = "code-front-2">
                                                                    <BoardCodes language={"js"}></BoardCodes>
                                                                </code>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "knowledges-code-divs">
                                                <div className = "knowledges-code-title-divs">
                                                    <h1 className = {`knowledges-code-titles ${tema}`}>Tecnologias:</h1>
                                                </div>
                                                <KnowledgesLanguages theme={tema} languages={["html", "css", "js", "react", "bootstrap", "jquery", "sass", "css-in-js", "tailwind"]}></KnowledgesLanguages>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className = "knowledges-articles">
                                            <div className = "knowledges-icon-areas">
                                                <div className = {`knowledges-icon-divs move move-top ${tema}`} id = "knowledges-div-back">
                                                    <img className = {`knowledges-icons ${tema}`} src = "images/img_server.png"></img>
                                                </div>
                                            </div>
                                            <h3 className = {`title3 text-align-center ${tema}`}>Back-End</h3>
                                            <h6 className = {`title6 text-align-center ${tema}`}>Estou buscando aprender mais sobre o "lado do servidor".</h6>
                                        </div>
                                        <div className = "knowledges-divs">
                                            <div className = "knowledges-left">
                                                <div className = {`code-boards ${tema}`} id = "front-end">
                                                    <div className = "code-board-headers">
                                                        <div className = "board-header-flex">
                                                            <div className = "board-header-circle-divs">
                                                                <div className = "board-circle-divs">
                                                                    <span className = "board-circles red"></span>
                                                                </div>
                                                                <div className = "board-circle-divs">
                                                                    <span className = "board-circles yellow"></span>
                                                                </div>
                                                                <div className = "board-circle-divs">
                                                                    <span className = "board-circles green"></span>
                                                                </div>
                                                            </div>
                                                            <div className = "board-header-filename-divs">
                                                                <button className = {`board-filename-buttons back ${tema} selected`} id = "filename-button-back-0" onClick = {() => {boardFileClick({id: 0, type: 'back'})}}>
                                                                    <span className = {`board-filenames ${tema}`}>index.js</span>
                                                                </button>
                                                                <button className = {`board-filename-buttons back ${tema}`} id = "filename-button-back-1" onClick = {() => {boardFileClick({id: 1, type: 'back'})}}>
                                                                    <span className = {`board-filenames ${tema}`}>index.php</span>
                                                                </button>
                                                                <button className = {`board-filename-buttons back ${tema}`} id = "filename-button-back-2" onClick = {() => {boardFileClick({id: 2, type: 'back'})}}>
                                                                    <span className = {`board-filenames ${tema}`}>app.py</span>
                                                                </button>
                                                            </div>
                                                            <div className = "board-empty-divs"></div>
                                                        </div>
                                                    </div>
                                                    <div className = "code-board-bodies">
                                                        <div className = "board-body-flex">
                                                            <div className = "board-number-lines">
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">1</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">2</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">3</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">4</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">5</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">6</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">7</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">8</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">9</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">10</p>
                                                                </div>
                                                                <div className = "board-number-divs">
                                                                    <p className = "board-numbers">11</p>
                                                                </div>
                                                            </div>
                                                            <div className = "board-code-div">
                                                                <code className = "board-codes back show" id = "code-back-0">
                                                                    <BoardCodes language={"nodejs"}></BoardCodes>
                                                                </code>
                                                                <code className = "board-codes back" id = "code-back-1">
                                                                    <BoardCodes language={"php"}></BoardCodes>
                                                                </code>
                                                                <code className = "board-codes back" id = "code-back-2">
                                                                    <BoardCodes language={"python"}></BoardCodes>
                                                                </code>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "knowledges-code-divs">
                                                <div className = "knowledges-code-title-divs">
                                                    <h1 className = {`knowledges-code-titles ${tema}`}>Tecnologias:</h1>
                                                </div>
                                                <KnowledgesLanguages theme={tema} languages={["nodejs", "ejs", "php", "python"]}></KnowledgesLanguages>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className = "knowledges-articles">
                                            <div className = "knowledges-icon-areas">
                                                <div className = {`knowledges-icon-divs move move-top ${tema}`} id = "knowledges-div-db">
                                                    <img className = {`knowledges-icons ${tema}`} src = "images/img_db.png"></img>
                                                </div>
                                            </div>
                                            <h3 className = {`title3 text-align-center ${tema}`}>Banco de dados</h3>
                                            <h6 className = {`title6 text-align-center ${tema}`}>Entendo sobre criação e modelagem de banco de dados SQL.</h6>
                                        </div>
                                        <div className = "knowledges-divs">
                                            <div className = "knowledges-code-divs">
                                                <div className = "knowledges-code-title-divs">
                                                    <h1 className = {`knowledges-code-titles ${tema}`}>Tecnologias:</h1>
                                                </div>
                                                <KnowledgesLanguages theme={tema} languages={["sqlite", "mysql", "postgresql"]}></KnowledgesLanguages>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className = "knowledges-articles">
                                            <div className = {`knowledges-icon-divs move move-top ${tema}`} id = "knowledges-div-tools">
                                                <img className = {`knowledges-icons ${tema}`} src = "images/img_tools.png"></img>
                                            </div>
                                            <h3 className = {`title3 text-align-center ${tema}`}>Ferramentas</h3>
                                            <h6 className = {`title6 text-align-center ${tema}`}>Veja algumas ferramentas que utilizo para a criação dos meus projetos.</h6>
                                        </div>
                                        <div className = "knowledges-divs">
                                            <div className = "knowledges-code-divs">
                                                <div className = "knowledges-code-title-divs">
                                                    <h1 className = {`knowledges-code-titles ${tema}`}>Tecnologias:</h1>
                                                </div>
                                                <KnowledgesLanguages theme={tema} languages={["vscode", "git", "github", "figma"]}></KnowledgesLanguages>
                                            </div>
                                        </div>
                                    </section>
                                </main>
                            </div>
                        </div>
                    </section>
                    <section ref={experiencesRef} className = {`container1 ${tema}`} id = "portfolio-experiences-header">
                        <br></br>
                        <h1 className = {`title1 text-align-center move move-top  ${tema}`} id = "projects-title">Experiência</h1>
                        <h5 className = {`title5 text-align-center move move-top  ${tema}`} id = "projects-main-description">Veja toda a minha experiência profissional</h5>
                        <br></br>
                        <Experiences theme={tema}></Experiences>
                        <div id = "portfolio-experiences-background">
                            <div id="portfolio-experiences-background-light" style={{position: "absolute", bottom: 0, left: "2.5%", height: "2px", width: "95%", backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(187, 187, 187, 0.5))", borderRadius: "10px"}}></div>
                        </div>
                    </section>
                    <section ref={projectsRef} className = {`container1 ${tema}`} id = "portfolio-projects-header">
                        <div id = "portfolio-projects-background"></div>
                        <div className = "portfolio-projects-main">
                            <div className = "portfolio-projects-div">
                                <div className = "portfolio-projects-title-div">
                                    <br></br>
                                    <h1 className = {`title1 text-align-center move move-top ${tema}`} id = "projects-title">Projetos</h1>
                                    <h5 className = {`title5 text-align-center move move-top ${tema}`} id = "projects-main-description">Veja todos os meus projetos e quais linguagens usei neles:</h5>
                                </div>
                                <div id = "projects-main-div">
                                    <Projects theme={tema} setProject={setModalProject}></Projects>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={footerRef} className = {`container1 ${tema}`} id = "footer-container">
                        <footer className = "portfolio-footer" id = "footer">
                            <div className = "portfolio-footer-divs">
                                <div className = "footer-contatos-div">
                                    <ul id = "contatos-list">
                                        <FooterContacts theme={tema}></FooterContacts>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </section>
                </div>
            </div>
        </main>
    );
}