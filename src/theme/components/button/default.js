import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { transition } from '../../transition'
import { get } from 'jsutils'

const defWhite = get(colors, 'palette.white01')
const defGreen = get(colors, 'palette.green02')
const hoverGreen = get(colors, 'palette.green03')
const activeGreen = get(colors, 'palette.green04')

const defaultBtn = {
  default: {
    main: {
      $all: {
        borderColor: defGreen,
        backgroundColor: defGreen,
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
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
    text: {
      $all: {
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.5,
        textAlign: 'center',
        color: defWhite,
      },
      $web: {},
      $native: {}
    }
  }
}

defaultBtn.disabled = inheritFrom(defaultBtn.default, {
  main: {
    $all: {
      opacity: 0.4,
    },
    $web: {
      cursor: 'not-allowed'
    },
    $native: {}
  },
  text: {
    $all: {
      opacity: 0.4
    },
    $web: {},
    $native: {}
  }
})

defaultBtn.hover = inheritFrom(defaultBtn.default, {
  main: {
    $all: {
      borderColor: hoverGreen,
      backgroundColor: hoverGreen,
    },
    $web: {},
    $native: {}
  },
  text: {
    $all: {},
    $web: {},
    $native: {}
  }
})

defaultBtn.active = inheritFrom(defaultBtn.hover, {
  main: {
    $all: {},
    $web: {},
    $native: {}
  },
  text: {
    $all: {},
    $web: {},
    $native: {}
  }
})

export {
  defaultBtn
}