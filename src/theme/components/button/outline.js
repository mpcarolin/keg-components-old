import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { containedStates } from './contained'
import { get } from 'jsutils'

const outlineStates = {
  default: {
    main: {
      padding: 8,
      outline: 'none',
      borderWidth: 1,
      borderColor: get(colors, 'surface.default.main'),
      backgroundColor: get(colors, 'palette.white01'),
    },
    content: {
      color: get(colors, 'opacity._80'),
    }
  },
  disabled: {
    main: {},
    content: {}
  },
  hover: {
    main: {
      backgroundColor: get(colors, 'palette.white03'),
    },
    content: {}
  },
  active: {
    main: {},
    content: {}
  }
}

const buildColorStyle = color => {
  return {
    default: {
      main: {
        borderColor: color,
      },
      content: {
        color: color,
      }
    },
    hover: {
      main: {
        borderColor: color,
        backgroundColor: colors.opacity(10, color),
      },
      content: {
        color: color,
      }
    }
  }
}

const outline = {
  primary: buildColorStyle(get(colors, 'surface.primary.main')),
  secondary: buildColorStyle(get(colors, 'surface.secondary.main')),
  warn: buildColorStyle(get(colors, 'surface.warn.main')),
  danger: buildColorStyle(get(colors, 'surface.danger.main')),
}

outline.default = inheritFrom(containedStates.default, outlineStates.default)
outline.disabled = inheritFrom(outline.default, containedStates.disabled, outlineStates.disabled)
outline.hover = inheritFrom(outline.default, outlineStates.hover)
outline.active = inheritFrom(outline.hover, outlineStates.active)

export {
  outline,
  outlineStates
}