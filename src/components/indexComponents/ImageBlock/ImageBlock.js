import React from 'react';

import style from './ImageBlock.module.css'

import churchFamily from './church-family.jpg'
import youthGroupTrip from './youth-group-trip.jpg'
import salvationArmyDonation from './salvationArmyDonation.jpg';

const ImageBlock = () => (
  <div className={style.ImageBlock}>
    <img src={salvationArmyDonation} />
    <img src={youthGroupTrip} />
    <img src={churchFamily} />
  </div>
)

export default ImageBlock