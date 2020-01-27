import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 're-theme'
import { useAutocompleteItems } from './helper'
import { ScrollableSelect } from './scrollable/scrollableSelect'
import { Input } from 'KegInput'
import { View } from 'KegView'


/**
 * Provides text input with autocomplete functionality. As user types, shows a menu of autocomplete options that contain user input as a substring.
 * Parent component must pass the total list of options (in autocompleteValues prop) for this to work.
 * @param {Function} onSelect - (optional) callback of form (text) => {...}, called when user selects a value from the autocomplete menu
 * @param {Function} onChange - (optional) callback of form (text) => {...}, called when user types or selects a value. updates character by character
 * @param {String} placeholder - (optional) placeholder text filled when no text has been inputted
 * @param {String} text - (optional) initial value of the text in the input
 * @param {Object} style - (optional) style object for the root view of this component
 * @param {Object} style - (optional) style object for the text input 
 * @param {Object} style - (optional) style object for the select menu
 * @param {Object} inputRef - (optional) a ref that will be assigned to the TextInput. Use this for obtaining access to TextInput functions like Clear
 * @param {Function} onSubmitEditing - (optional) callback when user presses enter on web
 * @param {Array} values - array of possible strings to use for autocomplete
 * @param {Number} menuHeight - (optional) height of menu that shows autocomplete values, before scrolling is necessary
 */
export const Autocomplete = ({ onChange, onSelect, placeholder='', text=null, style={}, inputStyle={}, menuStyle={}, inputRef=null, onSubmitEditing=()=>{}, values=[], menuHeight=75 }) => {

  const theme = useTheme()
  const [ inputText, updateText ] = useState(text || '')
  const [ autocompleteItems, setSelectedItem ] = useAutocompleteItems(inputText, values)

  const onSelectItem = ({ text }) => [ updateText, setSelectedItem, onSelect ].map(fn => fn && fn(text))

  const showMenu = (autocompleteItems.length > 0)

  return (
    <View style={ style }>
      <Input
        style={ theme.join(theme.form.autocomplete.input, theme.typography.font, inputStyle) }
        placeholder={placeholder}
        onChangeText={txt => {
          updateText(txt)
          onChange && onChange(txt)
        }}
        value={inputText}
        ref={inputRef}
        onSubmitEditing={onSubmitEditing}
      />

      { /* nest select in view so that it appears below the input, but still has absolute positioning */ }
      <View>
        <ScrollableSelect 
          height={menuHeight}
          style={menuStyle}
          visible={showMenu}
          items={autocompleteItems}
          onSelect={onSelectItem}
          animationDuration={100}
        />
      </View>
    </View>
  )  
}

const AutocompletePropsTypes = {
  theme: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  inputRef: PropTypes.object,
  onSubmitEditing: PropTypes.func
}
Autocomplete.propTypes = AutocompletePropsTypes
