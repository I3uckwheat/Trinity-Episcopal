import React from 'react'

import prideFlag from './prideFlag.svg'
import featherLogo from './featherLogo.png'
import cross from './cross.png'

const Badges = props => (
  <>
    <img src={prideFlag} alt="Pride Flag" />
    <img src={featherLogo} alt="Cross with Feathers" />
    <img src={cross} alt="Niobrara Cross" />
    {/* <img src={diocesan} alt="Diocesan Cross" /> */}
  </>
)

export default Badges
