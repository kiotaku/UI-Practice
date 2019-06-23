import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Animation2 = () => (
  <div styleName="container">
    <div styleName="top item"><i className="fas fa-caret-square-down"></i></div>
    <div styleName="left item"><i className="fas fa-caret-square-right"></i></div>
    <div styleName="right item"><i className="fas fa-caret-square-left"></i></div>
    <div styleName="bottom item"><div styleName="title">Title</div></div>
    <div styleName="short-bar rotate-right"></div>
    <div styleName="short-bar rotate-left"></div>
    <div styleName="long-bar rotate-right"></div>
    <div styleName="long-bar rotate-left"></div>
  </div>
)

export default CSSModules(Animation2, style, { allowMultiple: true })
