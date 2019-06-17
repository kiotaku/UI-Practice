import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Card = ({ title, text }) => (
  <div styleName="card">
    <div styleName="image">
      <img src="https://dummyimage.com/600x300/444/fff"></img>
    </div>
    <div styleName="card_content">
      <div styleName="title">{title}</div>
      <div styleName="text">
        {text}
      </div>
    </div>
  </div>
)

export default CSSModules(Card, style)
