import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { get } from 'jsutils'
import { containedStyles } from './contained'

const transparent = get(colors, 'opacity._00')
const defBlack = get(colors, 'opacity._90')

const textStyles = {
  default: {
    main: {
      $all: {
        backgroundColor: transparent,
      },
      $web: {

      },
      $native: {
      }
    },
    content: {
      $all: {
        color: defBlack,
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
  },
}

const text = {}
text.default = inheritFrom(containedStyles.default, textStyles.default)
text.disabled = inheritFrom(text.default, containedStyles.disabled, textStyles.disabled)
text.hover = inheritFrom(text.default, containedStyles.hover, textStyles.hover)
text.active = inheritFrom(text.hover, textStyles.active)

export {
  text
}