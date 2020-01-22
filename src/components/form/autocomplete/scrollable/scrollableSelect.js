import React, { useState } from 'react'
import { Animated, FlatList, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useFromToAnimation } from 'KegHooks'
import { useTheme } from 're-theme'

/**
 * A scrollable menu list of items.
 * @param {*} props
 * @param {*} props.items - array of objects of the form { text, key } - key is optional if each item has unique text
 * @param {Object} props.items - style object for the view
 * @param {*} props.visible - boolean, indicating the menu is visible or hidden
 * @param {*} props.theme - theme object
 * @param {*} props.onSelect - the callback of form (item) => {...}. Fires when a menu item is selected
 * @param {Number} props.height - the maximum height of the menu before scrolling is required to see remaining items.
 * @param {Number} props.animationDuration - the duration (in milliseconds) of the menu's open/close animation. Defaults to 200ms
 */
export const ScrollableSelect = ({ items, style={}, visible=true, onSelect=() => {}, height=150, animationDuration=200 }) => {
  const theme = useTheme()
  const current = visible ? 0 : height // initial menu value
  const [ animatedHeight ] = useFromToAnimation({ current, from: 0, to: height, duration: animationDuration, })

  return (
      <Animated.View style={{ style, ...theme.form.autocomplete.menu, height: animatedHeight }}>
        <FlatList
          data={items}
          keyExtractor={item => item.key || item.text}
          renderItem={({ item }) => <SelectItem 
            theme={theme}
            text={item.text}
            onSelect={() => onSelect(item)} />
          }
        />
      </Animated.View>
    )
}

ScrollableSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
  onSelect: PropTypes.func,
}

/**
 * An item in a select box, to be selected
 */
const SelectItem = ({ theme, text, onSelect=() => {} }) => {
  const [ highlight, setHighlight ] = useState(false)
  return (
    <TouchableOpacity
      onStartShouldSetResponderCapture={() => true}
      style={highlight && theme.form.autocomplete.highlighted}
      onPress={() => onSelect(text)} 
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      <Text style={theme.form.autocomplete.item}>{ text }</Text>
    </TouchableOpacity>
  )
}