import React from 'react'
import { useTheme } from 're-theme'
import PropTypes from 'prop-types'
import { SelectItem } from 'KegScrollableSelectItem'
/**
 * A scrollable menu list of items.
 * @param {Object} props
 * @param {Array} props.items - array of objects of the form { text, key } - key is optional if each item has unique text
 * @param {Object} props.style - style object for the view
 * @param {Boolean} props.visible - boolean, indicating the menu is visible or hidden
 * @param {Object} props.theme - theme object
 * @param {Function} props.onSelect - the callback of form (item) => {...}. Fires when a menu item is selected
 * @param {Number} props.height - the maximum height of the menu before scrolling is required to see remaining items.
 * @param {Number} props.animationDuration - the duration (in milliseconds) of the menu's open/close animation. Defaults to 200ms
 */
export const ScrollableSelect = ({ items, style={}, visible=true, onSelect=() => {}, height=150, }) => {
  const theme = useTheme()
  const display = visible ? 'block' : 'none'

  return (
    <div style={{ display, ...theme.form.autocomplete.menu, height, style }}>
      {
        items.map(
          ({text, key}) => <SelectItem 
            key={key || text} 
            theme={theme}
            text={text}
            onSelect={onSelect}
          />
        )
      }
    </div> 
  )
}

ScrollableSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
  theme: PropTypes.object,
  onSelect: PropTypes.func,
  height: PropTypes.number,
}
