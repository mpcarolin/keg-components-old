import { colors } from '../../colors'
import { inheritFrom } from '../../../utils'
import { defaultBtn } from './default'

const contained = {
  default: inheritFrom(defaultBtn.default, {
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
  
}

contained.disabled = inheritFrom(contained.default, {
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

contained.active = inheritFrom(contained.default, {
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

contained.hover = inheritFrom(contained.default, {
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
  contained
}