import React from 'react'

import style from './Badges.module.css'

import prideFlag from './prideFlag.svg'
import featherLogo from './featherLogo.png'
import cross from './cross.png'

const Badges = props => (
  <div className={`${style.Badges} ${props.className}`}>
    <img src={prideFlag} alt="Pride Flag" />
    <img src={featherLogo} alt="Cross with Feathers" />
    <img src={cross} alt="Niobrara Cross" />
  </div>
)

export default Badges
