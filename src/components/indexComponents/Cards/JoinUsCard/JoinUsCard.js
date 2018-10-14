import React from 'react'

import ContentCard from '../../../UI/ContentCard/ContentCard'

import map from '../../../../images/map.png'

import style from './JoinUsCard.module.css'

const JoinUsCard = props => (
  <ContentCard className={props.className}>
    <a href="https://goo.gl/maps/cfEWtk8EMMs" className={style.imgLink}>
      <img src={map} alt="Click for directions" />
    </a>
    <article className={style.Join}>
      <h2>Join Us</h2>
      <div className={style.articleText}>
        <div className={style.contactInformation}>
          <div className={style.address}>
            <p>612 3rd St NE, Watertown, SD</p>
            <p>Use the entrance on 6th Ave NE</p>
          </div>
          <div>
            <p>Call Us: (605)-868-2425</p>
            <p>trinityepiscopalfaith@gmail.com</p>
          </div>
        </div>
        <div className={style.times}>
          <div className="left">
            <p>Wednesday - 5:30pm</p>
            <p>Christian study for youth & adults with meal</p>
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
