import Mouse from "./icons/mouse";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import styles from "../../../styles/Projects.module.scss";
import GithubFill from "./icons/github-fill";
import Link from "./icons/link";

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect (() => {
        callAPI();
    },[]);

    const callAPI = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/igorxaviers/repos`);
            let data = await res.json();
            data = data.filter((project) => project.description !== null);
            setProjects(data);
            console.log(data);
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <section className="mt-64 mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 relative">
            <h2 className="section-title">PROJETOS</h2>
            <div className="mt-20 grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <Mouse/>
                    <h2 className="ml-4 text-2xl font-semibold">projetos desenvolvidos</h2>
                </div>
                <div className="line col-span-2 w-full"></div>
            </div>
            <div className="px-4 grid md:grid-cols-2 md:gap-4">
                {
                projects.map((project, index) => (
                    <div className={`${styles.project} md:mt-10 mt-4 overflow-hidden relative px-8 py-6 rounded-2xl`} key={index}>
                        <div className="md:flex-row justify-between items-center w-full relative z-10">
                            <div className="">
                                <div className="flex flex-row items-center">
                                    <h3 className="font-bold text-xl">{project.name}</h3>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <a href={project.html_url} className="rounded-full bg-dark p-2 mr-2" target="_blank" rel="noreferrer">
                                        <GithubFill/>
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
            
            <a className="button mt-10 max-w-max flex items-center mx-auto" href=""><GithubFill/> <span className="ml-2">Veja todos</span></a>
        </section>
    );
}