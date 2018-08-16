import React from 'react'

import Layout from '../components/layout'

import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import ContentCard from '../components/UI/ContentCard/ContentCard'

import style from './index.module.css'

import map from '../images/map.png'
import people from '../images/people.jpg'

const IndexPage = () => (
  <Layout>
    <header>
      <Hero />
    </header>

    <main className={style.Main}>
      <article className={style.missionStatement}>
        <h2>Striving to be the hands and feet of Christ in the world</h2>
      </article>

      <ContentCard>
        <img src={map} alt="Click for directions" />
        <article className={style.Join}>
          <div className={style.articleText}>
            <h2>Join Us</h2>
            <p className="address">202 E Kemp, Watertown, SD</p>
            <div className={style.contactInformation}>
              <p>Call Us: (605)-868-2425</p>
              <p>trinityepiscopalfaith@gmail.com</p>
            </div>
            <div className={style.times}>
              <div className="left">
                <p>Wednesday - 5:30pm</p>
                <p>FREE meal then Christian Study</p>
              </div>
              <div className="right">
                <p>Sunday - 10:00am</p>
                <p>Service with coffee after!</p>
              </div>
            </div>
          </div>
        </article>
      </ContentCard>

      <ContentCard inverse={true}>
        <img className='' src={people} alt="happy children" />
        <div className="article-text">
          <h2>All Are Welcome</h2>
          <p>
            Trinity Episcopal Church is an open and affirming, welcoming
            community. We strive to love our neighbors as ourselves and respect
            the dignity of every person. We welcome all to find a spiritual home
            in the Episcopal Church. We welcome everyone to the table to worship
            together to the Glory of God. Amen.
          </p>
        </div>
      </ContentCard>

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
