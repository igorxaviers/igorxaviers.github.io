import Head from 'next/head'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { backgroundColor } from "../../styles/colors.module.scss"
import Knowledge from './components/Knowledge'
import JobExperience from './components/JobExperience'
import Projects from './components/Projects'


export default function Home() {

  const changeMode = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    localStorage.getItem('color-theme') === 'light' ? localStorage.setItem('color-theme', 'light') : localStorage.setItem('color-theme', 'dark')
  }


  return (
    <>
        <Head>
            <title>Igor Xavier - Desenvolvedor Front-end</title>

            <meta name="keywords" content="Desenvolvedor Front-end, Desenvolvedor, Front-end, Igor Xavier, Portfólio"/>
            <meta name="author" content="Igor Xavier"/>
            <meta name="language" content="pt-br"/>
            <meta name="revisit-after" content="7 days"/>
            <meta name="rating" content="general"/>
            <meta name="distribution" content="global"/>
            <meta name="robots" content="index, follow"/>
            <meta name="googlebot" content="index, follow"/>
            <meta charset="utf-8"/>

            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content={backgroundColor} />
            <meta name="application-name" content="Igor Xavier" />
            <meta name="msapplication-TileColor" content={backgroundColor} />

            <meta name="title" content="Igor Xavier - Desenvolvedor Front-end"/>
            <meta name="description" content="Especializado em desenvolvimento de aplicações front end (ocasionalmente também criando designs) de qualidade, 
            visando performace, modernas, responsivas, com um bom SEO & UI/UX."/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Igor Xavier - Desenvolvedor Front-end"/>
            <meta property="og:description" content="Especializado em desenvolvimento de aplicações front end (ocasionalmente também criando designs) de qualidade, 
            visando performace, modernas, responsivas, com um bom SEO & UI/UX."/>
            <meta property="og:image" content="/meta.png"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Igor Xavier - Desenvolvedor Front-end"/>
            <meta property="twitter:description" content="Especializado em desenvolvimento de aplicações front end (ocasionalmente também criando designs) de qualidade, 
            visando performace, modernas, responsivas, com um bom SEO & UI/UX."/>
            <meta property="twitter:image" content="/meta.png"/>
        </Head>
        <Navbar/>
        <main className="overflow-hidden pb-10 w-full relative">
          <div className="md:mt-48 mt-24 mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-3xl md:px-4 px-6 w-full sm:px-6 lg:px-8 relative">
            <Header/>
            <About/>
            <Knowledge/>
            <JobExperience/>
            <Projects/>
          </div>
          <Contact/>
        </main>
        <Footer/>
    </>
  )
}
