import React from 'react';

import style from './ImageBlock.module.css'

import churchFamily from './church-family.jpg'
import speakingChild from './speaking-child.jpg'
import youthGroupTrip from './youth-group-trip.jpg'

const ImageBlock = () => (
  <div className={style.ImageBlock}>
    <img src={speakingChild} />
    <img src={youthGroupTrip} />
    <img src={churchFamily} />
  </div>
)

export default ImageBlock