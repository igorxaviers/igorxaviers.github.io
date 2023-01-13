
import Experience from "./icons/experience";
import styles from "../../../styles/JobExperience.module.scss";
import experience from "../../experience.json"
import { useEffect } from "react";


export default function JobExperience() {

    useEffect(() => {
        console.log(experience);
    });

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
                            {
                                experience.map((item, index) => (
                                    <li 
                                    className="px-5 mt-1 py-3 bg-slate-900 rounded-md" 
                                    key={index}

                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.experience}>
                        <h3 className="text-xl font-semibold mb-1">Estágio <span className="text-tertiary">@VCOM Tecnologia</span></h3>
                        <span className="text-sm text-secondary">janeiro - dezembro 2022</span>

                        <ul className="mt-10">
                        {
                            experience.map((item, index) => {
                                let responsabilities = item.responsibilities;
                                return(
                                    responsabilities.map((responsability, index) => (
                                        <li key={index}>{responsability}</li>
                                )))
                            })
                        }   
                            <li>Desenvolvimento de sites e sistemas web asddddddd asdasdas asdasdasdasdas asd asd asdasdadasdas asdasda</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}
