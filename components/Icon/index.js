import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Icon = () => (
  <img styleName="icon" src="https://dummyimage.com/100x100/444/fff"></img>
)

export default CSSModules(Icon, style)
