import React from 'react';

import style from './Right.module.css'
import Shield from '../../../UI/Shield/Shield'

const Right = () => (
  <div className={style.Right}>
      <div className={style.Address}>
        <p>Trinity Episcopal Church</p>
        <p>202 E Kemp</p>
        <p>Watertown, SD</p>
        <p>(605)-868-2425</p>
      </div>
      <Shield className={style.Shield} />
    </div>
)

export default Right;