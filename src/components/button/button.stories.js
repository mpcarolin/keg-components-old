/* eslint-disable */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Text, View } from '../../'
import { action } from '@storybook/addon-actions'
import { StoryWrap } from 'StoryWrap'

const TextComp = props => (<Text { ...props } >Keg Button</Text>)
const buttonStyle = { width: 150, marginRight: 10 }

storiesOf('Button | Contained', module)
  .add('Normal', () =>
    <StoryWrap style={{ textAlign: 'center' }} >

        <Button
          style={ buttonStyle }
          onClick={ action("Button Clicked!") }
        >
          Primary
        </Button>

        <Button
          secondary
          style={ buttonStyle }
          onClick={ action("Button Clicked!") }
          content={ 'Secondary' }
        >
        </Button>

        <Button
          warn
          style={ buttonStyle }
          onClick={ action("Button Clicked!") }
          content={ 'Warning' }
        />

        <Button
          danger
          style={ buttonStyle }
          onClick={ action("Button Clicked!") }
          content={ 'Danger' }
        />

    </StoryWrap>
  )
  .add('Disabled', () =>
    <StoryWrap style={{ textAlign: 'center' }} >

        <Button
          style={ buttonStyle }
          disabled
          onClick={ action("Disabled Button Clicked!") }
          content={ 'Primary' }
        />

        <Button
          secondary
          disabled
          style={ buttonStyle }
          onClick={ action("Disabled Button Clicked!") }
          content={ 'Secondary' }
        />

        <Button
          warn
          disabled
          style={ buttonStyle }
          onClick={ action("Disabled Button Clicked!") }
          content={ 'Warning' }
        />

        <Button
          danger
          disabled
          style={ buttonStyle }
          onClick={ action("Disabled Button Clicked!") }
          content={ 'Danger' }
        />

    </StoryWrap>
  )

storiesOf('Button | Outline', module)
  .add('Normal', () =>
    <StoryWrap style={{ textAlign: 'center' }} >

      <Button 
        style={ buttonStyle }
        outline
        onClick={ action("Disabled Button Clicked!") }
      >
        { TextComp }
      </Button>

    </StoryWrap>
  )
  .add('Disabled', () =>
    <StoryWrap style={{ textAlign: 'center' }} >

      <Button 
        outline
        disabled
        style={ buttonStyle }
        onClick={ action("Disabled Button Clicked!") }
      >
        { TextComp }
      </Button>

    </StoryWrap>
  )

storiesOf('Button | Text', module)
  .add('Normal', () =>
    <StoryWrap style={{ textAlign: 'center' }} >

      <Button
        text
        style={ buttonStyle }
        onClick={ action("Disabled Button Clicked!") }
      >
        { TextComp }
      </Button>

    </StoryWrap>
  )
  .add('Disabled', () =>
    <StoryWrap style={{ textAlign: 'center' }} >

      <Button
        text
        disabled
        style={ buttonStyle }
        onClick={ action("Disabled Button Clicked!") }
      >
        { TextComp }
      </Button>

    </StoryWrap>
  )