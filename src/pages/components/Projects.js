import { useEffect, useState, useRef } from "react";
import styles from "../../../styles/Projects.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Mouse from "./icons/mouse";
import Github from "./icons/github";
import Link from "./icons/link";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const ref = useRef(null);
    const [projects, setProjects] = useState([]);

    useEffect (() => {
        callAPI();
        const el = ref.current;
        gsap.fromTo(
            el, 
            {x: '-200px', opacity: 0},
            {
                x: '0px', 
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 100%',
                    end: 'bottom 50%',
                    scrub: true,
                    toggleAction: 'restart pause resume pause',
                }
            }
        );
    },[]);

    const callAPI = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/igorxaviers/repos`);
            let data = await res.json();
            data = data.filter((project) => project.description !== null);
            data.sort((a,b) => a.pushed_at > b.pushed_at );
            setProjects(data);
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <section id="projects" className="mt-64 relative">
            <h2 className="section-title" ref={ref}>PROJETOS</h2>


            <div className="mt-20 mb-10 flex items-center">
                <div className="flex items-center title">
                    <Mouse/>
                    <h3 className="ml-4 md:text-2xl text-lg w-max font-semibold">projetos desenvolvidos</h3>
                </div>
                <div className="line ml-6 w-full"></div>
            </div>


            <div className="md:px-4 px-0 grid md:grid-cols-2 md:gap-4">
                {
                projects.map((project, index) => (
                    <div className={`${styles.project} md:mt-10 mt-4 overflow-hidden relative md:px-8 px-5 py-6 rounded-2xl`} key={index}>
                        <div className="md:flex-row justify-between items-center w-full relative z-10">
                            <div className="">
                                <div className="flex flex-row items-center">
                                    <h3 className="font-bold text-xl">{project.name}</h3>
                                </div>

                                <div className="flex flex-row mt-4">
                                    <a href={project.html_url} className="rounded-full bg-dark p-2 mr-2" target="_blank" rel="noreferrer">
                                        <Github/>
                                    </a>
                                    <a href={project.homepage} className="rounded-full bg-dark p-2" target="_blank" rel="noreferrer">
                                        <Link/>
                                    </a>
                                </div>

                                <p className="my-6 bg-dark text-sm leading-loose rounded-md px-4 py-4 relative z-10 max-w-full ">{project.description}</p>

                                <div className="flex flex-row flex-wrap">
                                {
                                    project.topics.map((topic, index) => (
                                        <span className="px-2 py-1 font-normal text-sm text-tertiary rounded-md mr-2 mt-2" key={index}>{topic}</span>
                                    ))
                                }
                                </div>
                            </div>
                            {/* <div>
                                <img src={project.owner.avatar_url} alt={project.owner.login} />
                            </div> */}
                        </div>
                        <div className="noise"></div>
                    </div>
                ))
                }
            </div>
            
            <a 
            className="button mt-10 max-w-max flex items-center mx-auto" 
            href="https://github.com/igorxaviers?tab=repositories"
            target="_blank" rel="noreferrer">
                <Github/> <span className="ml-2">Veja todos</span>
            </a>
        </section>
    );
}