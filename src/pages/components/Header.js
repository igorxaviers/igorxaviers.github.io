import styles from "../../../styles/Header.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import Arrow from "./icons/arrow";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
    useEffect(() => {
        const timeLine = gsap.timeline({defaults: {duration: .4,ease: 'power4.out', }});
        timeLine.fromTo(
            `.${styles.introduction}`, 
            {y: 100, height:0, opacity: 0},
            {y: 0, height: 'auto' ,opacity: 1, duration: 1}
        )
        .fromTo(`.${styles.name}`, 
            {y: 100, opacity: 0},
            {y: 0, opacity: 1}
        , '<1')
        .fromTo(`.${styles.function}`, 
            {y: 100, opacity: 0},
            {y: 0, opacity: 1}
        , '<.8')
        .fromTo(`.${styles.description}`, 
            {y: 50, opacity: 0},
            {y: 0, opacity: 1}
        , '<.1')
        .fromTo('.button', 
            {y: 10, opacity: 0},
            {y: 0, opacity: 1}
        , '<.5')
    });



    return ( 
        <header className="mx-auto md:max-w-6xl mt-20 relative">
            <h5 className={`${styles.introduction} text-tertiary text-lg`}>Olá, meu nome é</h5>
            <h1 className={`${styles.name} md:text-7xl text-5xl font-bold mt-5`}>Igor Xavier</h1>
            <h5 className={`${styles.function} md:text-5xl text-3xl font-bold text-secondary mt-2`}>sou um desenvolvedor <span className={styles.front}>front-end</span></h5>
            <p className={`${styles.description} text-secondary leading-relaxed max-w-2xl mt-8 md:text-base text-sm`}>
                Especializado em desenvolvimento de aplicações front end (ocasionalmente também criando designs) de qualidade, 
                visando performace, modernas, responsivas, com um bom SEO e pensando na usabilidade das pessoas.
            </p>
            <AnchorLink className="button mt-10 ml-0" href='#about'><Arrow/> Mais sobre mim</AnchorLink>
            {/* <div className={styles.sphere}></div> */}
        </header>
    );
}