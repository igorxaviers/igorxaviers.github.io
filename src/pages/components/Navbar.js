import Logo from "./icons/logo";
import Document from "./icons/document";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "../../../styles/Navbar.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";



export default function Navbar() {
    useEffect(() => {
        const timeLine = gsap.timeline({defaults: {duration: 1}});
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
    });

    return (
        <nav className={`${styles.bar} py-3 backdrop-blur-sm z-20`}>
            <div className="md:px-20 mx-auto">
                <div className="flex justify-between">
                    <Logo></Logo>
                    <div className="flex space-x-4 items-center">
                        <AnchorLink className={styles.link} href='#about'>sobre</AnchorLink>
                        <AnchorLink className={styles.link} href='#knowlodge'>conhecimentos</AnchorLink>
                        <AnchorLink className={styles.link} href='#project'>projetos</AnchorLink>
                        <AnchorLink className={styles.link} href='#experience'>experiências</AnchorLink>
                        <AnchorLink className={styles.link} href='#contact'>contato</AnchorLink>
                        <div className={`${styles.curriculum} flex items-center`} href='/about'>
                            <Document></Document>
                            <p>currículo</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}