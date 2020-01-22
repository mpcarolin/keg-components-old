import React from 'react'
import { withTheme } from 'KegReTheme'
import { get } from 'jsutils'
import PropTypes from 'prop-types'

export const Input = withTheme(props => {
  const { theme, children, style, onClick, onPress, onChange, onChangeText, ...args } = props

  // handles callbacks on both standard web and react-native-web (@see: https://facebook.github.io/react-native/docs/textinput#onchangetext)
  const handleChange = (event) => {
    onChange && onChange(event)
    onChangeText && onChangeText(event.target.value)
  }

  return (
    <input
      { ...args }
      onChange={handleChange}
      style={ theme.join(get(theme, ['form', 'input', 'default' ]), style) }
      onClick={ onClick || onPress }
    />
  )
})

Input.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  onChange: PropTypes.func,
}
