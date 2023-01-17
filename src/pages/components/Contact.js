import { useEffect, useRef } from "react";
import styles from "../../../styles/Contact.module.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Mail from "./icons/mail"
import Image from "next/image"
import bgContact from "../../../public/bg-contact.webp"
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(
            el, 
            {y: '-200px', opacity: 0, scale: 2.5},
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

    return (
        <section id="contact" className="mt-72 pt-20 relative md:pb-40 pb-20">

            <div className="md:px-20 px-4 mx-auto text-center relative z-20" ref={ref}>
                <h3 className="text-tertiary text-lg">se interessou?</h3>
                <h2 className="md:text-5xl text-4xl text-center text-neutral-100 font-bold mt-4">entre em contato</h2>
                <p className="md:my-10 my-6 max-w-xl mx-auto text-secondary leading-relaxed">
                    Estou aberto a parcerias, projetos, <span className="text-primary">oportunidades de trabalho</span> ou até algo mais! Pode entrar em 
                    contato comigo através do meu 
                    <a className="hover:text-tertiary hover:underline ml-2" href="mailto:igorxavier.ixds@gmail.com">email</a>,
                    <a className="hover:text-tertiary hover:underline mx-2" href="https://www.linkedin.com/in/igorxavierdasilva/" target="_blank" rel="noreferrer">linkedin</a> 
                    ou 
                    <a className="hover:text-tertiary hover:underline ml-2" href="https://www.instagram.com/igorxavi_/" target="_blank" rel="noreferrer">instagram</a>
                </p>
                <a className="button mt-20 mx-auto" href="mailto:igorxavier.ixds@gmail.com"> <Mail/> Fale comigo!</a>
            </div>
            <Image priority={0} className={`${styles.bg} select-none`} alt="background polygons"  src={bgContact}/>
            <Image priority={0} className={`${styles.bgRight} md:block hidden select-none`} alt="background polygons" src={bgContact}/>
        </section>
    )
}