import Head from 'next/head'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import { backgroundColor } from "../../styles/colors.module.scss"
import Knowledge from './components/Knowledge'
import JobExperience from './components/JobExperience'
export default function Home() {

  const changeMode = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    localStorage.getItem('color-theme') === 'light' ? localStorage.setItem('color-theme', 'light') : localStorage.setItem('color-theme', 'dark')
  }

  return (
    <>
      <Head>
          <title>Igor Xavier</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <About/>
      <Knowledge/>
      <JobExperience/>
      <div className='mb-60'></div>
    </>
  )
}