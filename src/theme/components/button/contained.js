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
        color: get(colors, 'palette.white01'),
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.5,
        textAlign: 'center',
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
        backgroundColor: get(colors, 'surface.primary.dark'),
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
  },
}

const contained = {
  primary: {
    default: {
      main: {
        backgroundColor: get(colors, 'surface.primary.main'),
      },
    },
    hover: {
      main: {
        backgroundColor: get(colors, 'surface.primary.dark'),
      }
    }
  },
  secondary: {
    default: {
      main: {
        backgroundColor: get(colors, 'surface.secondary.main'),
      },
    },
    hover: {
      main: {
        backgroundColor: get(colors, 'surface.secondary.dark'),
      }
    }
  },
  warn: {
    default: {
      main: {
        backgroundColor: get(colors, 'surface.warn.main'),
      },
    },
    hover: {
      main: {
        backgroundColor: get(colors, 'surface.warn.dark'),
      }
    }
  },
  danger: {
    default: {
      main: {
        backgroundColor: get(colors, 'surface.danger.main'),
      },
    },
    hover: {
      main: {
        backgroundColor: get(colors, 'surface.danger.dark'),
      }
    }
  }
}


contained.default = inheritFrom(containedStates.default, {})
contained.disabled = inheritFrom(contained.default, containedStates.disabled, {})
contained.hover = inheritFrom(contained.default, containedStates.hover, {})
contained.active = inheritFrom(contained.default, containedStates.hover, containedStates.active, {})


export {
  contained,
  containedStates,
}