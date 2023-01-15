import styles from "../../../styles/About.module.scss";
import { gsap } from "gsap";
import { useEffect, useRef, forwardRef } from "react";
import User from "./icons/user";
import me from "/public/foto-perfil.jpg";
import Image from 'next/image'

export default function About() {
    const ref = useRef(null);

    useEffect(() => {

    }, []);

    return ( 
        <section id="about" className="mt-64 relative">
            <h2 className="section-title">SOBRE</h2>


            <div className="mt-20 flex items-center">
                <div className="title flex items-center">
                    <User/>
                    <h2 className="min-w-max md:ml-4 ml-2 md:text-2xl text-lg font-semibold">sobre mim</h2>
                </div>
                <div className="line ml-6 w-full"></div>
            </div>    

            
            <div className="md:mt-20 mt-10 md:grid grid-flow-col grid-cols-3">
                <div className="md:col-span-2">
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
                    <ul className={`${styles.topics} grid md:grid-cols-3 grid-cols-2 gap-3 text-sm text-left`}>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                        <li>Typescript</li>
                        <li>Testes automatizados</li>
                    </ul>
                </div>


                <div className="md:col-span-1 md:mt-0 mt-20">
                    <div className={`${styles.imgBox} mx-auto`}>
                        <Image className={styles.img} src={me} alt="Foto de Igor Xavier"/>
                        <Image className={styles.imgGlass} src={me} alt="Foto desfocada de Igor Xavier"/>
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