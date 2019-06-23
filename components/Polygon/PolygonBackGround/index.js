import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const PolygonBackGround = () => (
  <div styleName="main"></div>
)

export default CSSModules(PolygonBackGround, style)