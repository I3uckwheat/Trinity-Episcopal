import React from 'react'

import Shield from '../UI/Shield/Shield'
import style from './Hero.module.css'

const Hero = () => (
  <div className={style.Hero}>
    <div className={style.heroTitle}>
      <h1>Trinity Episcopal Church</h1>
      <Shield className={style.shield} />
    </div>
  </div>
)

export default Hero
