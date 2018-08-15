import React from 'react'

import style from './Bottom.module.css'
import Left from './Left/Left'
import Right from './Right/Right';

const Bottom = () => (
  <div className={style.Bottom}>
    <Left /> 
    <Right />   
  </div>
)

export default Bottom
