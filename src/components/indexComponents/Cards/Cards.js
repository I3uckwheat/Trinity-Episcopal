import React from 'react'

import style from './Cards.module.css'

import JoinUsCard from './JoinUsCard/JoinUsCard'
import WelcomeCard from './WelcomeCard/WelcomeCard'

const Cards = () => (
  <>
    <JoinUsCard className={style.Cards} />
    {/* <WelcomeCard className={style.Cards} /> */}
  </>
)

export default Cards
