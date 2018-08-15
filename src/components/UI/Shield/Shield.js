import React from 'react'

import shield from './shield.png'

const Shield = (props) => {
  console.log(props)
  return(<img className={props.className} src={shield} alt="Episcopal Shield" />)
}

export default Shield
