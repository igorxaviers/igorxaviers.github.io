import styles from "../../../styles/About.module.scss";
import { gsap } from "gsap";
import { useEffect, useRef, forwardRef } from "react";
import User from "./icons/user";
import me from "/public/me.png";
import Image from 'next/image'

export default function About() {
    const ref = useRef(null);

    useEffect(() => {

    }, []);

    return ( 
        <section className="mt-64 mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 relative">
            <h2 className="section-title">SOBRE</h2>
            <div className="mt-20 grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <User/>
                    <h2 className="ml-4 text-2xl font-semibold">um pouco mais sobre mim</h2>
                </div>
                <div className="line col-span-2 w-full"></div>
            </div>    
            <div className="mt-20 grid grid-flow-col grid-cols-3">
                <div className="col-span-2">
                    <p className=" text-secondary leading-relaxed">
                        Meu nome é Igor Xavier e eu adoro desenvolver para a internet 👨🏽‍💻. Me apaixonei desde o meu primeiro contato com as 
                        tecnologias web 🕸️ em 2017 e desde então venho sempre estudando coisas.
                        Meus primeiros projetos foram com HTML e CSS puro criando e recriando sites existentes (como a página do Google 😄)
                    </p>
                    <p className="mt-4 text-secondary leading-relaxed">
                        Especializado em Front end, já atuei desde a
                        prototipação, design até o desenvolvimento de aplicações simples e escaláveis, aplicando boas práticas
                        de UI/UX e utilizando linguagens de programações modernas
                    </p>
                    <p className="mt-4 text-secondary leading-relaxed mb-4">
                        Atualmente estou aprofundando meus conhecimentos em:
                    </p>
                    <ul className={`${styles.topics} grid grid-cols-3 gap-3 text-sm text-left`}>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>Typescript</li>
                        <li>Testes automatizados</li>
                    </ul>
                </div>
                <div>
                    <div className={`${styles.imgBox} mx-auto`}>
                        <Image className={styles.img} src={me} alt="Picture of the author"/>
                        <div className={styles.squareImg}>
                            <div className={`${styles.xBox} ${styles.animate} ${styles.delay3}`}>
                                <div className={styles.x}>x</div>
                            </div>
                            <div className={`${styles.xBox} ${styles.animate} ${styles.delay7}`}>
                                <div className={styles.x}>x</div>
                            </div>
                            <div className={`${styles.xBox} ${styles.animate} ${styles.delay11}`}>
                                <div className={styles.x}>x</div>
                            </div>
                            <div className={`${styles.xBox} ${styles.animate}`}>
                                <div className={styles.x}>x</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

;