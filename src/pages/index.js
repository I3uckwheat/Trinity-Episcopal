import React from 'react'

import Layout from '../components/layout'

import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import MissionStatement from '../components/indexComponents/MissionStatment/MissionStatment'
import JoinUsCard from '../components/indexComponents/JoinUsCard/JoinUsCard'
import WelcomeCard from '../components/indexComponents/WelcomeCard/WelcomeCard'

import style from './index.module.css'

const IndexPage = () => (
  <Layout>
    <header>
      <Hero />
    </header>

    <main className={style.Main}>
      <MissionStatement />
      <JoinUsCard />
      <WelcomeCard />

      {/* <div className="final-images">
        <img />
        <img />
        <img />
      </div> */}
    </main>

    <footer>
      <Footer />
    </footer>
  </Layout>
)

export default IndexPage
