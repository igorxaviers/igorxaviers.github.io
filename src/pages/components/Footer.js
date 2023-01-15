import Linkedin from "./icons/Linkedin"
import Instagram from "./icons/Instagram"
import Github from "./icons/Github"


export default function Footer() {
    return(
        <footer className="py-8 text-center">
            <div className="fixed md:flex flex-col hidden left-10 justify-center">
                <a className="mt-8 hover:-translate-y-1 transition-all mx-auto" href="https://www.linkedin.com/in/igorxavierdasilva/" target="_blank">
                    <Linkedin/>
                </a>
                <a className="mt-8 hover:-translate-y-1 transition-all mx-auto" href="https://www.instagram.com/igorxavi_/" target="_blank">
                    <Instagram/>
                </a>
                <a className="mt-8 hover:-translate-y-1 transition-all mx-auto mb-10" href="https://github.com/igorxaviers/" target="_blank">
                    <Github/>
                </a>
                <div className="h-20 w-px bg-primary mx-auto"></div>
            </div>
            <div className="md:hidden flex justify-center mb-8">
                <a className="mx-2" href="https://www.linkedin.com/in/igorxavierdasilva/" target="_blank">
                    <Linkedin/>
                </a>
                <a className="mx-2" href="https://www.instagram.com/igorxavi_/" target="_blank">
                    <Instagram/>
                </a>
                <a className="mx-2" href="https://github.com/igorxaviers/" target="_blank">
                    <Github/>
                </a>
            </div>
            <p className="md:text-base text-xs">
                © {new Date().getFullYear()} design & desenvolvimento por <span className="text-tertiary">Igor Xavier</span> ❤️
            </p>
        </footer>                                    
    )
}