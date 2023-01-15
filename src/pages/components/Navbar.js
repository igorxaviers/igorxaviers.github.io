import Logo from "./icons/logo";
import Document from "./icons/document";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "../../../styles/Navbar.module.scss";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Link from "next/link";	



export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const timeLine = gsap.timeline({ defaults: {ease: "power4.out" } });
        timeLine.fromTo(
            `.${styles.bar}`,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
            `.${styles.link}`,
            { opacity: 0, stagger: 0.1 },
            { opacity: 1, stagger: 0.2, duration: 0.4 },
            '<.5'
        )
        .fromTo(
            `.igor`,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.4 },
            '<.5'
        )
        .fromTo(
            `.xavier`,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4 },
            '<.0'
        )
    }, []);

    return (
        <nav className={`${styles.bar} md:py-5 py-3 px-6 md:px-0 backdrop-blur-sm z-20`}>
            <div className="md:px-12 mx-auto">
                <div className="flex justify-between">
                    {/* <Logo></Logo> */}
                    <Link href="/" className={`flex items-center ${styles.logo}`}>
                        <span className="igor">Igor</span>
                        <span className={`text-tertiary text-5xl font-bold ${styles.logoX}`}>X</span>
                        <span className="xavier">avier</span>
                    </Link>
                    <div className="md:flex hidden space-x-3 items-center">
                        <AnchorLink className={styles.link} href='#about'>sobre</AnchorLink>
                        <AnchorLink className={styles.link} href='#knowlodge'>conhecimentos</AnchorLink>
                        <AnchorLink className={styles.link} href='#project'>projetos</AnchorLink>
                        <AnchorLink className={styles.link} href='#experience'>experiências</AnchorLink>
                        <AnchorLink className={styles.link} href='#contact'>contato</AnchorLink>
                        <a className={`${styles.curriculum} flex items-center`} href="/curriculo.pdf" target="_blank" rel="noreferrer">
                            <Document></Document>
                            <p className="ml-3">currículo</p>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button 
                            className={menuActive? `${styles.box} ${styles.active}` : `${styles.box}`} 
                            onClick={() => setMenuActive(!menuActive)}
                            type="button">
                            <div className={styles.hamburguer}></div>
                        </button>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}