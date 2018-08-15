import React from 'react'

import style from './Bottom.module.css'
import Badges from './Badges/Badges'
import Shield from '../../UI/Shield/Shield'


const Bottom = () => (
  <div className={style.Bottom}>
    <Badges className={style.Badges}/>
    <Shield className={style.Shield}/>
    <div className={style.Address}>
      <p>Trinity Episcopal Church</p>
      <p>202 E Kemp</p>
      <p>Watertown, SD</p>
      <p>(605)-868-2425</p>
    </div>
  </div>
)

export default Bottom
