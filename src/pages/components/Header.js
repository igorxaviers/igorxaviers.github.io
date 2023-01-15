import { useEffect, useRef } from "react";
import styles from "../../../styles/Header.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Arrow from "./icons/arrow";
import AnchorLink from "react-anchor-link-smooth-scroll";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;

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
        , '<.1')
        .fromTo(`.${styles.description}`, 
            {y: 50, opacity: 0},
            {y: 0, opacity: 1}
        , '<.1')
        .fromTo('.button', 
            {y: 10, opacity: 0},
            {y: 0, opacity: 1}
        , '<.5');

        gsap.fromTo(
            el, 
            {y: 100},
            {
                y: -400,
                scrollTrigger: {
                    trigger: '.button',
                    start: 'top 90%',
                    end: 'bottom -10%',
                    scrub: true,
                    toggleAction: 'restart pause resume pause',
                }
            }
        );
    }, []);



    return ( 
        <header className="mx-auto md:max-w-6xl mt-20 relative">
            <h5 className={`${styles.introduction} text-tertiary text-lg`}>Olá, meu nome é</h5>
            <h1 className={`${styles.name} md:text-7xl text-5xl font-bold mt-5`}>Igor Xavier</h1>
            <h5 className={`${styles.function} md:text-6xl text-3xl font-bold text-secondary mt-2`}>Sou um desenvolvedor <span className={styles.front}>front-end</span></h5>
            <p className={`${styles.description} text-secondary leading-loose max-w-2xl mt-8 md:text-base text-sm`}>
                Especializado em desenvolvimento de aplicações front end (ocasionalmente também criando designs) de qualidade, 
                visando performace, modernas, responsivas, com um bom SEO & UI/UX.
            </p>
            <AnchorLink className="button mt-20 ml-0" href='#about'><Arrow/> Mais sobre mim</AnchorLink>
            <span className={styles.x} ref={ref}>X</span>
            <div className={styles.sphere}></div>
        </header>
    );
}