import styles from '../../../styles/Knowledge.module.scss'
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
// import all icons here



export default function Knowledge(){
    return(
        <section className="mt-64 mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 relative">
            <div className={styles.box}>
                <div className="grid grid-cols-4 items-center relative z-10">
                    <div className="line w-full left-0 relative"></div>
                    <div className="flex items-center justify-center col-span-2">
                        <Computer/>
                        <h2 className="ml-4 text-2xl font-semibold">com o que já trabalhei</h2>
                    </div>
                    <div className="line w-full invert-side"></div>
                </div>

                <p className="my-16 text-center text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim tellus diam. Pellentesque aliquam turpis</p>

                <div className="mt-10">
                    <div className="flex gap-4 w-full justify-center">
                        <div className={styles.technology}>
                            <React/>
                            <p className="mt-4 text-lg text-secondary">React</p>
                        </div>
                        <div className={styles.technology}>
                            <Vue/>
                            <p className="mt-4 text-lg text-secondary">Vue</p>
                        </div>
                        <div className={styles.technology}>
                            <Js/>
                            <p className="mt-4 text-lg text-secondary">JS (ES6+)</p>
                        </div>
                        <div className={styles.technology}>
                            <Typescript/>
                            <p className="mt-4 text-lg text-secondary">Typescript</p>
                        </div>
                    </div>
                    <div className="flex gap-4 w-full justify-center mt-5">
                        <div className={styles.technology}>
                            <Node/>
                            <p className="mt-4 text-lg text-secondary">Node.js</p>
                        </div>
                        <div className={styles.technology}>
                            <Sass/>
                            <p className="mt-4 text-lg text-secondary">Sass</p>
                        </div>
                        <div className={styles.technology}>
                            <Bootstrap/>
                            <p className="mt-4 text-lg text-secondary">Bootstrap</p>
                        </div>
                        <div className={styles.technology}>
                            <Tailwind/>
                            <p className="mt-4 text-lg text-secondary">Tailwind</p>
                        </div>
                        <div className={styles.technology}>
                            <Css/>
                            <p className="mt-4 text-lg text-secondary">CSS</p>
                        </div>
                    </div>
                    <div className="flex gap-4 w-full justify-center mt-5">
                        <div className={styles.technology}>
                            <Html/>
                            <p className="mt-4 text-lg text-secondary">HTML</p>
                        </div>
                        <div className={styles.technology}>
                            <Wordpress/>
                            <p className="mt-4 text-lg text-secondary">Wordpress</p>
                        </div>
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