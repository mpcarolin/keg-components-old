import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { get } from 'jsutils'
import { containedStates } from './contained'

const transparent = get(colors, 'opacity._00')

const textStyles = {
  default: {
    main: {
      backgroundColor: transparent,
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
  },
}

const buildColorStyle = color => {
  return {
    default: {
      main: {},
      content: {
        color: color,
      }
    },
    hover: {
      main: {
        backgroundColor: colors.opacity(10, color),
      },
      content: {
        color: color,
      }
    }
  }
}

const text = {
  primary: buildColorStyle(get(colors, 'surface.primary.main')),
  secondary: buildColorStyle(get(colors, 'surface.secondary.main')),
  warn: buildColorStyle(get(colors, 'surface.warn.main')),
  danger: buildColorStyle(get(colors, 'surface.danger.main')),
}

text.default = inheritFrom(containedStates.default, textStyles.default)
text.disabled = inheritFrom(text.default, containedStates.disabled, textStyles.disabled)
text.hover = inheritFrom(text.default, containedStates.hover, textStyles.hover)
text.active = inheritFrom(text.hover, textStyles.active)

export {
  text
}