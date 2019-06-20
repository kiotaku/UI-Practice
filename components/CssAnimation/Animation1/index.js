import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Animation1 = () => (
  <div styleName="container">
    <div styleName="diamond-container">
      { [...Array(6).keys()].map((x, i) => (
        <div key={i} styleName={`diamond ${i % 2 == 1 ? `even-${Math.floor(i / 2)}` : `odd-${Math.floor(i / 2)}` }`}></div>
      )) }
    </div>
    <div styleName="title-container">
      <div styleName="title-bar"></div>
      <div styleName="title">Some Title</div>
      <div styleName="title-bar"></div>
    </div>
  </div>
)

export default CSSModules(Animation1, style, { allowMultiple: true })