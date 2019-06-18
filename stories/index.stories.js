import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from 'components/Card'
import Acoordion from 'components/Acoordion'
import Icon from 'components/Icon'
import FollowButton from 'components/FollowButton'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .add('Card', () => (
    <Card title={text('Title', 'title タイトル')} text={text('Text', 'text content\nsome text...\nなんかのテキスト')}></Card>
  ))
  .add('Acoordion', () => (
    <Acoordion text={text('Text', 'text content\nsome text...\nなんかのテキスト...\n長いテキスト...\n...\n...\n...\n...')}></Acoordion>
  ))
  .add('short text Acoordion', () => (
    <Acoordion text={text('Text', 'text content\nsome text...')}></Acoordion>
  ))
  .add('Icon', () => (
    <Icon></Icon>
  ))
  .add('FollowButton', () => (
    <FollowButton onClick={action('button-click')}></FollowButton>
  ))
  .add('following FollowButton', () => (
    <FollowButton following={true} onClick={action('button-click')}></FollowButton>
  ))
