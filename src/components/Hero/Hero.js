import React from 'react'

import ordination from './ordination.jpg'
import shield from './shield.png'
import style from './Hero.module.css'

const Hero = () => (
  <div className={style.Hero}>
    <div className={style.heroTitle}>
      <h1>Trinity Episcopal Church</h1>
      <img className={style.shield} src={shield} alt="Episcopal Shield" />
    </div>
  </div>
)

export default Hero
