import defaults from '../defaults.json'
import { colors } from '../colors'
import { transition } from '../transition'
import { margin } from '../margin'
import { get } from 'jsutils'
import { sharedToggle } from './sharedToggle'

const space = get(defaults, 'form.checkbox.space', 15)
const height = get(defaults, 'form.switch.height', 20)
const width = get(defaults, 'form.switch.width', 20)

export const switchStyles = {
  wrapper: {
    $all: {
      marginBottom: margin.size,
    },
    $web: {
      outline: 'none',
      height: height,
      width: width * 2,
      display: 'flex',
      alignItems: 'stretch',
      position: 'relative',
      marginTop: margin.size / 2,
      marginBottom: margin.size + (margin.size / 2),
    }
  },
  area: {
    $web: {
      outline: 'none',
      backgroundColor: get(colors, 'palette.gray02'),
      boxShadow: `inset 0px 0px 5px ${ get(colors, 'opacity._15') }`,
      borderRadius: get(defaults, 'form.border.radius', 5) * 2,
      height: '70%',
      width: '100%',
      position: 'absolute',
      top: 3,
    }
  },
  indicator: {
    $web: {
      outline: 'none',
      backgroundColor: get(colors, 'palette.white02'),
      borderRadius: get(defaults, 'form.border.radius', 5) * 2,
      boxShadow: `0px 1px 3px ${ get(colors, 'opacity._50') }`,
      marginLeft: 0,
      cursor: 'pointer',
      height: height,
      width: width,
      position: 'absolute',
      top: 0,
      left: 0,
      ...transition('left', 0.2),
    }
  },
  on: {
    $web: {
      left: width,
      backgroundColor: get(colors, 'surface.primary.dark'),
      boxShadow: `1px 1px 3px ${ get(colors, 'opacity._50') }`,
    }
  },
  disabled: {
    $all: {
      opacity: 0.4,
    }
  },
  ...sharedToggle,
}