import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const FollowButton = ({ following, onClick }) => (
  <button styleName={`button ${following ? 'following' : 'follow' }`} onClick={onClick}>{
    following ? (<span>Following</span>) : 'Follow'
  }</button>
)

export default CSSModules(FollowButton, style, { allowMultiple: true })
