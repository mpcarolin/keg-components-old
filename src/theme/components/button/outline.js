import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { containedStates } from './contained'
import { get } from 'jsutils'

const defWhite = get(colors, 'palette.white01')

const outlineStates = {
  default: {
    main: {
      $all: {
        borderColor: get(colors, 'opacity._20'),
        borderWidth: 1,
        padding: 8,
        backgroundColor: defWhite,
        outline: 'none',
      },
      $web: {

      },
      $native: {
      }
    },
    content: {
      $all: {
        color: get(colors, [ 'opacity', '_80' ]),
      },
      $web: {
        
      },
      $native: {
        
      }
    }
  },
  disabled: {
    main: {
      $all: {
        
      },
      $web: {

      },
      $native: {
      }
    },
    content: {
      $all: {
        color: get(colors, 'opacity._50'),
      },
      $web: {
        
      },
      $native: {
        
      }
    }
  },
  hover: {
    main: {
      $all: {
        backgroundColor: get(colors, 'opacity._10'),
      },
      $web: {
        
      },
      $native: {
        
      }
    },
    content: {
      $all: {

      },
      $web: {
        
      },
      $native: {
        
      }
    }
  },
  active: {
    main: {
      $all: {
        
      },
      $web: {
        
      },
      $native: {
        
      }
    },
    content: {
      $all: {

      },
      $web: {
        
      },
      $native: {
        
      }
    }
  }
}

const outline = {}
outline.default = inheritFrom(containedStates.default, outlineStates.default)
outline.disabled = inheritFrom(outline.default, containedStates.disabled, outlineStates.disabled)
outline.hover = inheritFrom(outline.default, containedStates.hover, outlineStates.hover)
outline.active = inheritFrom(outline.hover, outlineStates.active)

export {
  outline,
  outlineStates
}