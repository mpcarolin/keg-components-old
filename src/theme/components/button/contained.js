import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { transition } from '../../transition'
import { get } from 'jsutils'

const defWhite = get(colors, 'palette.white01')
const defGreen = get(colors, 'palette.green02')
const hoverGreen = get(colors, 'palette.green03')
const activeGreen = get(colors, 'palette.green04')

const contained = {}
const containedStyles = {
  default: {
    main: {
      $all: {
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: defGreen,
        padding: 9,
        minHeight: 35,
        outline: 'none',
        textAlign: 'center',
        margin: 'auto',
        ...transition([ 'backgroundColor', 'borderColor' ], 0.8),
      },
      $web: {
        cursor: 'pointer',
        boxShadow: 'none',
      },
      $native: {}
    },
    content: {
      $all: {
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.5,
        textAlign: 'center',
        color: defWhite,
        ...transition([ 'color' ], 0.15),
      },
      $web: {},
      $native: {}
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
      $all: {
        opacity: 0.4
      },
      $web: {},
      $native: {}
    }
  },
  hover: {
    main: {
      $all: {
        backgroundColor: hoverGreen,
      },
      $web: {},
      $native: {}
    },
    content: {
      $all: {},
      $web: {},
      $native: {}
    }
  },
  active: {
    main: {
      $all: {},
      $web: {},
      $native: {}
    },
    content: {
      $all: {},
      $web: {},
      $native: {}
    }
  }
}

contained.default = inheritFrom(containedStyles.default, {})
contained.disabled = inheritFrom(contained.default, containedStyles.disabled, {})
contained.hover = inheritFrom(contained.default, containedStyles.hover, {})
contained.active = inheritFrom(contained.default, containedStyles.hover, containedStyles.active, {})

export {
  contained,
  containedStyles
}