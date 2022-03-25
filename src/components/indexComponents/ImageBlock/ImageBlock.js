import React from 'react';

import * as style from './ImageBlock.module.css'

import bottomRight from './bottom-right.jpg'
import youthGroupTrip from './youth-group-trip.jpg'
import salvationArmyDonation from './salvationArmyDonation.jpg';

const ImageBlock = () => (
  <div className={style.ImageBlock}>
    <img src={salvationArmyDonation} alt="Nine people of various ages holding homemade tie blankets in front of a Salvation Army for donation"/>
    <img src={youthGroupTrip} alt="Two women standing in front of a bear statue with two children leaning on the top of the statue during a youth trip"/>
    <img src={bottomRight} alt="Two women holding patchwork cloth in church"/>
  </div>
)

export default ImageBlock