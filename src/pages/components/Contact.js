import styles from "../../../styles/Contact.module.scss"
import Mail from "./icons/mail"
import Image from "next/image"
import bgContact from "../../../public/bg-contact.webp"

export default function Contact() {
    return (
        <section id="contact" className="mt-72 pt-20 relative md:pb-40 pb-20">

            <div className="md:px-20 px-4 mx-auto text-center relative z-20">
                <h4 className="text-tertiary text-lg">se interessou?</h4>
                <h2 className="md:text-5xl text-4xl text-center text-neutral-100 font-bold mt-4">entre em contato</h2>
                <p className="md:my-10 my-6 max-w-xl mx-auto text-secondary leading-relaxed">
                    Estou aberto a parcerias, projetos, <span className="text-primary">oportunidades de trabalho</span> ou até algo mais, estou sempre aberto! Pode entrar em 
                    contato comigo por 
                    <a className="hover:text-tertiary hover:underline ml-2" href="mailto:igorxavier.ixds@gmail.com">email</a>,
                    <a className="hover:text-tertiary hover:underline mx-2" href="https://www.linkedin.com/in/igorxavierdasilva/" target="_blank" rel="noreferrer">linkedin</a> 
                    ou 
                    <a className="hover:text-tertiary hover:underline ml-2" href="https://www.instagram.com/igorxavi_/" target="_blank" rel="noreferrer">instagram</a>
                </p>
                <a className="button mt-20 mx-auto" href="mailto:igorxavier.ixds@gmail.com"> <Mail/> Fale comigo!</a>
            </div>
            <Image priority={0} className={styles.bg} alt="background polygons"  src={bgContact}/>
            <Image priority={0} className={`${styles.bgRight} md:block hidden`} alt="background polygons" src={bgContact}/>
        </section>
    )
}