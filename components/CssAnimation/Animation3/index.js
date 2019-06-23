import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Animation3 = () => (
  <svg viewBox='0 0 200 200'>
    <circle styleName='circle' cx='100' cy='100' r='50' />
    <circle styleName='circle' cx='100' cy='100' r='40' />
    <circle styleName='circle' cx='100' cy='100' r='30' />
    <circle styleName='circle' cx='100' cy='100' r='20' />
    <circle styleName='circle' cx='100' cy='100' r='10' />
    <circle styleName='circle' cx='100' cy='100' r='5' />
  </svg>
)

export default CSSModules(Animation3, style)