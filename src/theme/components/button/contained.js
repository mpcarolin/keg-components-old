import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { transition } from '../../transition'
import { get } from 'jsutils'

const containedStates = {
  default: {
    main: {
      $all: {
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: get(colors, 'surface.default.main'),
        padding: 9,
        minHeight: 35,
        outline: 'none',
        textAlign: 'center',
        margin: 'auto',
        ...transition([ 'backgroundColor', 'borderColor' ], 0.3),
      },
      $web: {
        cursor: 'pointer',
        boxShadow: 'none',
      },
      $native: {}
    },
    content: {
      color: get(colors, 'palette.white01'),
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0.5,
      textAlign: 'center',
      ...transition([ 'color' ], 0.15),
    }
  },
  disabled: {
    main: {
      $all: {
        opacity: 0.4,
      },
      $web: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      $native: {}
    },
    content: {
      color: get(colors, 'opacity._50'),
    }
  },
  hover: {
    main: {
      backgroundColor: get(colors, 'surface.default.dark'),
    },
    content: {}
  },
  active: {
    main: {},
    content: {}
  },
}

const buildColorStyle = colorStyle => {
  return {
    default: { main: { backgroundColor: colorStyle.main } },
    hover: { main: { backgroundColor: colorStyle.dark } }
  }
}

const contained = {
  primary: buildColorStyle(get(colors, 'surface.primary')),
  secondary: buildColorStyle(get(colors, 'surface.secondary')),
  warn: buildColorStyle(get(colors, 'surface.warn')),
  danger: buildColorStyle(get(colors, 'surface.danger')),
}

contained.default = inheritFrom(containedStates.default, {})
contained.disabled = inheritFrom(contained.default, containedStates.disabled, {})
contained.hover = inheritFrom(contained.default, containedStates.hover, {})
contained.active = inheritFrom(contained.default, containedStates.hover, containedStates.active, {})

export {
  contained,
  containedStates,
}