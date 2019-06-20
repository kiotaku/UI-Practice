import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

import Icon from 'components/Icon'
import FollowButton from 'components/FollowButton'
import Acoordion from 'components/Acoordion'

const Profile = ({ official, displayFollowButton, displayName, userId, website, facebook, twitter, following, follower, description }) => (
  <div styleName="profile">
    <div styleName="image-box">
      <img styleName="image" src="https://dummyimage.com/600x400/eee/222"></img>
    </div>
    <div styleName="official">公式マーク</div>
    <div styleName="icon"><Icon></Icon></div>
    <div styleName="follow-button"><FollowButton></FollowButton></div>
    <div styleName="user-info">
      <div styleName="display-name">{displayName || 'test name'}</div>
      <div styleName="user-id">{userId || '@test_id'}</div>
    </div>
    <div styleName="sites">
      <div styleName='website'><i className="fas fa-globe"></i></div>
      <div styleName='facebook'><i className="fab fa-facebook-f"></i></div>
      <div styleName='twitter'><i className="fab fa-twitter"></i></div>
    </div>
    <div styleName="follow">
      <div styleName="following"><span styleName="number">{following || 1000}</span><span styleName="unit">follow</span></div>
      <div styleName="bar"></div>
      <div styleName="follower"><span styleName="number">{following || 1000}</span><span styleName="unit">fan</span></div>
    </div>
    <div styleName="description">
      <Acoordion text={description || 'some thing long long long long long long long long long long long long long long long long long long long long long long long text\nb\nc\nd\ne\nf\ng'}></Acoordion>
    </div>
  </div>
)

export default CSSModules(Profile, style)