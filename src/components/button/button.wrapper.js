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


const getChildren = (Children, theme, activeStyle, styles={}) => {
  return renderFromType(Children, { style: theme.join(activeStyle.content, styles.content) }, Text)
}

export const ButtonWrapper = props => {
  const theme = useTheme()

  const {
    Element,
    children,
    content,
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
  const btnType = type || outline && 'outline' || text && 'text'
  const builtStyles = btnTheme[btnType || 'contained' ]

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
        styles && get(styles, [ 'button', 'main' ]),
        disabled && get(builtStyles, [ 'disabled', 'main' ]),
        disabled && styles && get(styles, [ 'button', 'disabled' ]),
        style
      )}
      children={ getChildren(children || content, theme, activeStyle, styles) }
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
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onPress: PropTypes.func,
  outline: PropTypes.bool,
  ref: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
}
