import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 're-theme'
import { TextInput, View } from 'react-native'
import { useAutocompleteItems } from './helper'
// import { Divider } from 'material-bread'
// import { SelectMenu } from 'SVComponents/select'


/**
 * Provides text input with autocomplete functionality. As user types, shows a menu of autocomplete options that contain user input as a substring.
 * Parent component must pass the total list of options (in autocompleteValues prop) for this to work.
 * @param {Function} onChange - callback of form (text) => {...}, called every time user updates text input
 * @param {String} placeholder - placeholder text filled when no text has been inputted
 * @param {String} text - content of the input. Use onChange callback to update this prop as needed
 * @param {Object} style - style object
 * @param {Object} inputRef - a ref that will be assigned to the TextInput. Use this for obtaining access to TextInput functions like Clear
 * @param {Function} onSubmitEditing - callback when user presses enter on web
 * @param {Array} autocompleteValues - array of possible strings to use for autocomplete
 */
export const AutocompleteTextInput = ({ onChange, placeholder='', text=null, style={}, inputRef=null, onSubmitEditing=()=>{}, autocompleteValues=[] }) => {
  const theme = useTheme()
  const [ autocompleteItems, setSelectedItem ] = useAutocompleteItems(text, autocompleteValues)

  const onSelectItem = ({ text }) => {
    onChange(text)
    setSelectedItem(text)
  }

  return (
    <View style={ style }>
      <TextInput
        style={{ ...styles(theme) }}
        placeholder={placeholder}
        onChangeText={text => onChange(text)}
        value={text}
        ref={inputRef}
        onSubmitEditing={onSubmitEditing}
      />
      {/* { (autocompleteItems.length > 0) && <Divider /> } */}
      <SelectMenu 
        height={75}
        visible={autocompleteItems.length > 0}
        items={autocompleteItems}
        onSelect={onSelectItem}
        animationDuration={100}
      />
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
AutocompleteTextInput.propTypes = AutocompletePropsTypes

const styles = (theme) => ({
  ...theme.text.font,
    padding: 15 
})

