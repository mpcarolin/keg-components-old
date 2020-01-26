import React, { useState, useEffect } from 'react'
import { useTheme, useThemeActive, useThemeHover } from 'KegReTheme'
import { get, isFunc } from 'jsutils'
import PropTypes from 'prop-types'
import { Text } from '../typography/text'
import {
  getPressHandler,
  getActiveOpacity,
  isValidComponent,
  renderFromType
} from '../../utils'

const buildStyles = (styles, theme, type) => {

  const btnTheme = get(theme, [ 'components', 'button' ], [])

  return btnTheme[type] || btnTheme.default

}

const getChildren = (Children, theme, activeStyle, styles) => {
  
  const style = theme.join(activeStyle.text, (styles && styles.text))
  
  return renderFromType(Children, { style }, Text)

}

export const ButtonWrapper = props => {
  const theme = useTheme()

  const {
    Element,
    children,
    disabled,
    isWeb,
    onClick,
    onPress,
    outline,
    contained,
    ref,
    style,
    styles,
    text,
    type,
    ...elProps
  } = props

  const btnTheme = get(theme, [ 'components', 'button' ], [])
  const btnType = outline && 'outline' || contained && 'contained' || type
  const builtStyles = btnTheme[btnType] || btnTheme.default

  const [ hoverRef, activeStyle ] = useThemeHover(
    builtStyles.default,
    builtStyles.hover,
    { ref, noMerge: true }
  )

  return (
    <Element
      elProps={ elProps }
      ref={ hoverRef }
      disabled={ disabled }
      style={ theme.join(
        activeStyle.main,
        styles && styles.button,
        disabled && get(builtStyles, [ 'disabled', 'main' ]),
        disabled && styles && styles.disabled,
        style
      )}
      children={ getChildren(children || text, theme, activeStyle, styles) }
      { ...getPressHandler(isWeb, onClick, onPress) }
      { ...getActiveOpacity(isWeb, props, activeStyle) }
    />
  )

}

ButtonWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  ref: PropTypes.object,
  style: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.string,
}
