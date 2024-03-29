/* eslint-disable import/first */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Option, Options, Switch } from '../../'
import { action } from '@storybook/addon-actions'
import { StoryWrap } from 'StoryWrap'

storiesOf('Form | Select', module)
  .add('Default', () =>
    <StoryWrap>

      <Select onChange={ action("Select Change!") } >
        <Option label='1' value={ 1 } />
        <Option label='2' value={ 2 } />
        <Option label='3' value={ 3 } />
        <Option label='4' value={ 4 } />
      </Select>

    </StoryWrap>
  )
