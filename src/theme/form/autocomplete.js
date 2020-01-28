import defaults from '../defaults.json'
import { get } from 'jsutils'
import { colors } from '../colors'
import { padding } from '../padding'

export const autocomplete = {
  $all: {
    input: {
      backgroundColor: colors.palette.white01,
      minWidth: 100,
    },
    highlighted: {
      backgroundColor: '#e0e0e0',
    },
    menu: {
      backgroundColor: 'white',
      position: 'absolute',
    },
    item: {
      height: 10,
      margin: 0,
      marginTop: 8,
      marginBottom: 8,
      fontSize: 12,
    }
  },
  $web: {
    input: {
      fontFamily: 'inherit',
      height: get(defaults, 'form.input.height', 35),
      fontSize: 16,
      padding: padding.size,
      width: '100%',
    },
    menu: {
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    highlighted: {
      cursor: 'pointer'
    },
    item: {
      padding: 10
    }
  },
  $native: {
    input: {
    },
    menu: {
      left: 0,
      top: 0,
    },
  }
}
