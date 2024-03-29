import React from 'react'

import * as style from './ContentCard.module.css'

const ContentCard = props => (
  <article
    className={`${style.ContentCard} ${props.inverse ? style.inverse : ''} ${
      props.className
    }`}
  >
    {props.children}
  </article>
)
export default ContentCard
