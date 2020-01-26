import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { defaultBtn } from './default'
import { get } from 'jsutils'
const defWhite = get(colors, 'palette.white01')

const outline = {
  default: inheritFrom(defaultBtn.default, {
    main: {
      $all: {
        borderColor: get(colors, 'opacity.opacity30'),
        backgroundColor: defWhite,
        borderWidth: 1,
        paddingHorizontal: 16,
        outline: 'none',
      },
      $web: {

      },
      $native: {
      }
    },
    text: {
      $all: {
        color: get(colors, 'opacity.opacity90'),
      },
      $web: {
        
      },
      $native: {
        
      }
    }
  })
}

outline.disabled = inheritFrom(defaultBtn.disabled, outline.default, {
  main: {
    $all: {
      
    },
    $web: {

    },
    $native: {
    }
  },
  text: {
    $all: {

    },
    $web: {
      
    },
    $native: {
      
    }
  }
})

outline.active = inheritFrom(defaultBtn.active, outline.default, {
  main: {
    $all: {
      
    },
    $web: {
      
    },
    $native: {
      
    }
  },
  text: {
    $all: {

    },
    $web: {
      
    },
    $native: {
      
    }
  }
})

outline.hover = inheritFrom(defaultBtn.hover, outline.default, {
  main: {
    $all: {
      
    },
    $web: {
      
    },
    $native: {
      
    }
  },
  text: {
    $all: {

    },
    $web: {
      
    },
    $native: {
      
    }
  }
})


export {
  outline
}