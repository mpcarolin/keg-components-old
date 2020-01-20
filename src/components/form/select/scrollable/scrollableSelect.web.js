import React from 'react'
import { Animated, FlatList, } from 'react-native'
import PropTypes from 'prop-types'
import { useFromToAnimation } from '../../hooks'

//TODO: rethink this: let the caller define what the menu items are!
/**
 * A menu list of items.
 * @param {*} props
 * @param {*} props.items - array of objects of the form { text, key } - key is optional if each item has unique text
 * @param {*} props.visible - boolean, indicating the menu is visible or hidden
 * @param {*} props.theme - theme object
 * @param {*} props.onSelect - the callback of form (item) => {...}. Fires when a menu item is selected
 * @param {Number} props.height - the maximum height of the menu before scrolling is required to see remaining items.
 * @param {Number} props.animationDuration - the duration of the menu's open/close animation. Defaults to 400
 */
export const ScrollableSelect = ({ items, visible=true, onSelect=() => {}, height=150, animationDuration=200 }) => {
  const current = visible ? 0 : height // initial menu value
  const [ animatedHeight ] = useFromToAnimation({ current, from: 0, to: height, duration: animationDuration, })
  return (
      <Animated.View style={{ ...styles.menu, height: animatedHeight }}>
        <FlatList
          data={items}
          keyExtractor={item => item.key || item.text}
          renderItem={({ item }) => <SelectItem 
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
const SelectItem = ({ text, onSelect=() => {} }) => {
  const [ highlight, setHighlight ] = useState(false)
  return (
    <TouchableOpacity
      onStartShouldSetResponderCapture={() => true}
      style={highlight && styles.highlighted}
      onPress={() => onSelect(text)} 
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      <Text style={sharedStyles.item}>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = {
  highlighted: {
    backgroundColor: '#e0e0e0',
  },
  highlightedText: {
    color: 'black'
  },
}
 

const styles = {
  menu: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
}
