import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero/Hero'

const IndexPage = () => (
  <div>
    <header>
      <Hero />
    </header>
    
    <main>
      <article className="mission-statement">
        <h2>Striving to be the hands and feet of Christ in the world</h2>
      </article>

      <article className="join content">
        <img className="map" src="" alt="map, click for directions" />
        <div className="article-text">
          <h2>Join Us</h2>
          <p className="address">202 E Kemp, Watertown, SD</p>
          <div className="contact-information">
            <p>Call Us: (605)-868-2425</p>
            <p>trinityepiscopalfaith@gmail.com</p>
          </div>
          <div className="times">
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

      <article className="all-welcome content">
        <img className="welcome-image" src="" alt="happy children" />
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
      </article>

      <div className="final-images">
        <img />
        <img />
        <img />
      </div>
    </main>

    <footer>
      <div className="top">
        <p>
          Founded in 1882, and after many years of changes, The Trinity
          Episcopal Church is striving to change the way you think about church.
          We work to improve the lives of everybody we touch by being active in
          the community.
        </p>
      </div>
      <div className="bottom">
        <div className="badges">
          <img />
          <img />
          <img />
        </div>
        <div className="address">
          <p>Trinity Episcopal Church</p>
          <p>202 E Kemp</p>
          <p>Watertown, SD</p>
          <p>(605)-868-2425</p>
        </div>
      </div>
    </footer>
  </div>
)

export default IndexPage
