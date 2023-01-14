
import Experience from "./icons/experience";
import styles from "../../../styles/JobExperience.module.scss";
import experience from "../../experience.json"
import { useEffect, useState } from "react";


export default function JobExperience() {
    const [activeTab, setactiveTab] = useState(0);

    useEffect(() => {
    });

    const tabs = () => (
        experience.map((item, index) => (
            <li
            className={activeTab === index ? `${styles.tab} px-5 mt-1 py-3 rounded-md text-primary` : "px-5 mt-1 py-3  rounded-md cursor-pointer text-secondary"}
            key={index}
            onClick={() => setactiveTab(index)}
            >{item.name}</li>
        ))
    )

    const tabItens = () => (
        <>
            <h3 className="text-xl font-semibold mb-1">
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
        <section className="mt-64 mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 relative">
            <h2 className="section-title">EXPERIÊNCIAS</h2>
            <div className="mt-20 grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <Experience/>
                    <h2 className="ml-4 text-2xl font-semibold">minhas experiências</h2>
                </div>
                <div className="line col-span-2 w-full"></div>
            </div>
            <div className="mt-20 mx-auto md:max-w-4xl px-4 sm:px-6 lg:px-8 relative">
                <div className="flex">
                    <div>
                        <ul className="border border-transparent border-x-2 pl-2 border-l-gray-500 min-w-max">
                            {tabs()}
                        </ul>
                    </div>
                    <div className={styles.experience}>
                        {tabItens()}
                    </div>
                </div>
            </div>
        </section>
    );
}
