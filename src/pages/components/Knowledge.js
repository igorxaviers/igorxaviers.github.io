import { useEffect, useRef } from "react";
import styles from '../../../styles/Knowledge.module.scss'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Computer from "./icons/computer";
import React from "./icons/react";
import Bootstrap from "./icons/bootstrap";
import Css from "./icons/css";
import Html from "./icons/html";
import Js from "./icons/js";
import Node from "./icons/node";
import Sass from "./icons/sass";
import Tailwind from "./icons/tailwind";
import Typescript from "./icons/typescript";
import Vue from "./icons/vue";
import Wordpress from './icons/wordpress';
import Triangle from './icons/triangle';
gsap.registerPlugin(ScrollTrigger);



export default function Knowledge(){

    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(
            el, 
            {y: '200px', opacity: 0, scale: 0.7},
            {
                y: '0px', 
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 100%',
                    end: 'bottom 90%',
                    scrub: true,
                    toggleAction: 'restart pause resume pause',
                }
            }
        );
    }, []);


    return(
        <section id="knowlodge" className="mt-64 md:pt-20 relative">
            <div className={`${styles.box} relative rounded-2xl md:py-20 py-10 overflow-hidden z-10`} ref={ref}>
                <div className="md:grid grid-cols-4 items-center relative z-10">
                    <div className="md:block hidden line w-full left-0 relative"></div>
                    <div className="flex items-center title justify-center col-span-2 text-center">
                        <Computer/>
                        <h2 className="ml-4 md:text-2xl text-lg font-semibold">com o que já trabalhei</h2>
                    </div>
                    <div className="md:block hidden line w-full invert-side"></div>
                </div>

                <p className="md:my-16 my-8 md:text-base text-sm md:px-0 px-3 text-center text-secondary">
                    Essas são algumas das tecnologias que já usei e já tenho grande familiaridade
                </p>

                <div className="mt-10 grid md:grid-rows-4 grid-rows-6 grid-flow-col justify-center gap-4">
                        <div className={styles.technology}>
                            <React/>
                            <p className="text-lg text-secondary">React</p>
                        </div>
                        <div className={styles.technology}>
                            <Vue/>
                            <p className="text-lg text-secondary">Vue</p>
                        </div>
                        <div className={styles.technology}>
                            <Js/>
                            <p className="text-lg text-secondary">JS (ES6+)</p>
                        </div>
                        <div className={styles.technology}>
                            <Typescript/>
                            <p className="text-lg text-secondary">Typescript</p>
                        </div>
                        <div className={styles.technology}>
                            <Node/>
                            <p className="text-lg text-secondary">Node.js</p>
                        </div>
                        <div className={styles.technology}>
                            <Sass/>
                            <p className="text-lg text-secondary">Sass</p>
                        </div>
                        <div className={styles.technology}>
                            <Bootstrap/>
                            <p className="text-lg text-secondary">Bootstrap</p>
                        </div>
                        <div className={styles.technology}>
                            <Tailwind/>
                            <p className="text-lg text-secondary">Tailwind</p>
                        </div>
                        <div className={styles.technology}>
                            <Css/>
                            <p className="text-lg text-secondary">CSS</p>
                        </div>
                        <div className={styles.technology}>
                            <Html/>
                            <p className="text-lg text-secondary">HTML</p>
                        </div>
                        <div className={styles.technology}>
                            <Wordpress/>
                            <p className="text-lg text-secondary">Wordpress</p>
                        </div>
                </div>
                <div className="noise"></div>
            </div>
            <div className={styles.triangle}>
                <Triangle/>
            </div>
        </section>
    )
}