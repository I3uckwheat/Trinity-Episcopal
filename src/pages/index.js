import React from 'react'

import Layout from '../components/layout'

import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import MissionStatement from '../components/indexComponents/MissionStatment/MissionStatment'
import Cards from '../components/indexComponents/Cards/Cards'
import ImageBlock from '../components/indexComponents/ImageBlock/ImageBlock'

import style from './index.module.css'

const IndexPage = () => (
  <Layout>
    <header>
      <Hero />
    </header>

    <main className={style.Main}>
      <MissionStatement />
      <Cards />
      {/* <ImageBlock /> */}
    </main>

    <footer>
      <Footer />
    </footer>
  </Layout>
)

export default IndexPage
