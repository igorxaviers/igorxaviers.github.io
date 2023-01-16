
import Experience from "./icons/experience";
import styles from "../../../styles/JobExperience.module.scss";
import experience from "../../experience.json"
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function JobExperience() {
    const [activeTab, setactiveTab] = useState(0);
    const ref = useRef(null);
    const jobs = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const elJobs = jobs.current;
        gsap.fromTo(
            el, 
            {x: '400px', opacity: 0},
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
        gsap.fromTo(
            elJobs, 
            {opacity: 0},
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 50%',
                    end: 'bottom 30%',
                    scrub: true,
                    toggleAction: 'restart pause resume pause',
                }
            }
        );
    }, []);

    const tabs = () => (
        experience.map((item, index) => (
            <li
            className={activeTab === index ? `${styles.tab} px-5 mt-1 py-3 rounded-md text-primary font-semibold` : "px-5 mt-1 py-3 rounded-md cursor-pointer text-secondary"}
            key={index}
            onClick={() => setactiveTab(index)}>
                <span className="md:text-base text-sm">{item.name}</span>
            </li>
        ))
    )

    const tabItens = () => (
        <>
            <h3 className="md:text-xl text-lg font-semibold mb-1">
                {experience[activeTab].name} 
                <span className="ml-2 text-tertiary">@{experience[activeTab].title}</span>
            </h3>
            <span className="text-sm text-secondary">{experience[activeTab].period}</span>
            <ul className="mt-10">
                {
                    experience[activeTab].responsibilities.map((item, index) => (
                        <li key={index} className="flex items-center mt-5">{item}</li>
                    ))
                }
            </ul>
        </>
    )


    return (
        <section id="experience" className="mt-64 relative">
            <h2 className="section-title" ref={ref}>EXPERIÊNCIAS</h2>


            <div className="mt-20 flex items-center">
                <div className="flex items-center title">
                    <Experience/>
                    <h3 className="min-w-max ml-4 md:text-2xl text-lg font-semibold">experiência de trabalho</h3>
                </div>
                <div className="line ml-6 w-full"></div>
            </div>


            <div className="md:mt-20 mt-10 mx-auto md:max-w-4xl max-w-max md:px-4 px-0 sm:px-6 lg:px-8 relative" ref={jobs}>
                <div className="md:flex block">
                    <div className="md:max-w-max max-w-full md:overflow-x-visible overflow-x-scroll md:overflow-y-visible overflow-y-hidden">
                        <ul className="border border-transparent border-x-2 pl-2 md:border-l-gray-500 md:border-b-0  border-b-gray-500 min-w-max md:block flex flex-row ">
                            {tabs()}
                        </ul>
                    </div>

                    <div className={`${styles.experience} md:ml-14 ml-0 md:mt-0 mt-10`}>
                        {tabItens()}
                    </div>
                </div>
            </div>
        </section>
    );
}
