import React from 'react'

import ContentCard from '../../../UI/ContentCard/ContentCard'

import map from '../../../../images/map.png'

import style from './JoinUsCard.module.css'

const JoinUsCard = props => (
  <ContentCard className={props.className}>
    <img src={map} alt="Click for directions" />
    <article className={style.Join}>
      <h2>Join Us</h2>
      <div className={style.articleText}>
        <div className={style.contactInformation}>
          <p className={style.address}>202 E Kemp, Watertown, SD</p>
          <div>
            <p>Call Us: (605)-868-2425</p>
            <p>trinityepiscopalfaith@gmail.com</p>
          </div>
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
)

export default JoinUsCard
