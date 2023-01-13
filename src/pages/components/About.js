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
                    <p className="text-lg text-secondary">
                        Olá, meu nome é Igor Xavier, tenho 23 anos e sou um desenvolvedor front-end.
                    </p>
                    <p className="mt-4 text-lg text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim tellus diam. Pellentesque aliquam 
                        turpis vel commodo eleifend. Ut rhoncus ut ipsum eu tincidunt. Vestibulum ante ipsum primis in faucibus 
                        orci luctus et ultrices posuere cubilia curae; Phasellus iaculis facilisis faucibus. Nunc varius iaculis tincidunt.

                        Vestibulum ante ipsum primis in faucibus orci cubilia curae; Phasellus iaculis facilisis faucibus. Nunc varius iaculis tincidunt.
                    </p>
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