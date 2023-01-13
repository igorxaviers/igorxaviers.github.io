import styles from "../../../styles/Header.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const timeLine = gsap.timeline({defaults: {duration: .5,ease: 'power4.out', }});
        timeLine.fromTo(
            `.${styles.introduction}`, 
            {y: 100, opacity: 0},
            {y: 0, opacity: 1}
        )
        .fromTo(`.${styles.name}`, 
            {y: 100, opacity: 0},
            {y: 0, opacity: 1}
        , '<.1')
        .fromTo(`.${styles.function}`, 
            {y: 100, opacity: 0},
            {y: 0, opacity: 1}
        , '<.2')
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
        <div className="mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 mt-36 relative">
            <h5 className={styles.introduction}>Olá, meu nome é</h5>
            <h1 className={styles.name}>Igor Xavier</h1>
            <h5 className={styles.function}>e eu sou um desenvolvedor <span className={styles.front}>front-end</span></h5>
            <p className={`${styles.description} max-w-2xl mt-8`}>
                Especializado em desenvolvimento de aplicações front end (ocasionalmente também criando designs) de qualidade, 
                visando performace, modernas, responsivas, com um bom SEO e pensando na usabilidade das pessoas.
            </p>
            <button className="button mt-10">Mais sobre mim</button>
            {/* <div className={styles.sphere}></div> */}
        </div>
    );
}