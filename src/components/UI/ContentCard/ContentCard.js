import React from 'react'

import style from './ContentCard.module.css'

const ContentCard = props => (
  <article
    className={`${style.ContentCard} ${props.inverse ? style.inverse : ''} ${props.className}`}
  >
    {props.children}
  </article>
)
export default ContentCard

{
  /* <article className="join content">
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
      </article> */
}
