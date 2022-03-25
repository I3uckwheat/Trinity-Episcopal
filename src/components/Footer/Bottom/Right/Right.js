import React from 'react'

import * as style from './Right.module.css'
import diocesan from './diocesan.png'

const Right = () => (
  <div className={style.Right}>
    <div className={style.Address}>
      <p>Trinity Episcopal Church</p>
      <p>612 3rd St NE</p>
      <p>Watertown, SD</p>
      <p>(605)-868-2425</p>
    </div>
    <img src={diocesan} alt="Diocesan Cross Logo" />
  </div>
)

export default Right
