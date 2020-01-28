import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from 're-theme'
import { P } from 'KegTypography'

/**
 * An item in a select box, to be selected
 * @param { Object } props
 * @param { String } props.text - the text of the select item
 * @param { Function } props.onSelect - callback of form text => {}. Runs when user selects an item.
 */
export const SelectItem = ({ text, onSelect=() => {} }) => {
  const theme = useTheme()
  const [ highlight, setHighlight ] = useState(false)
  const style = highlight ? theme.form.autocomplete.highlighted : {}

  return (
    <TouchableOpacity
      style={style}
      onPress={() => onSelect(text)} 
      onMouseEnter={() => setHighlight(true)}
      onMouseLeave={() => setHighlight(false)}
    >
      <P style={theme.form.autocomplete.item}>
        { text }
      </P>
    </TouchableOpacity>
  )
}

SelectItem.propTypes = {
  text: PropTypes.string,
  onSelect: PropTypes.func
}