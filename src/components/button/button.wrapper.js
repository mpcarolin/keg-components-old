import React from 'react'
import { useTheme, useThemeActive, useThemeHover } from 'KegReTheme'
import { useStyles } from '../../hooks'
import { get, isFunc } from 'jsutils'
import PropTypes from 'prop-types'
import { Text } from '../typography/text'
import {
  buildCompStyles,
  getActiveOpacity,
  getPressHandler,
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
    danger,
    isWeb,
    onClick,
    onPress,
    outline,
    contained,
    primary,
    ref,
    style,
    styles,
    secondary,
    text,
    type,
    warn,
    ...elProps
  } = props


  const [ btnStyles, setBtnStyles ] = useStyles(
    theme,
    `components.button`,
    [ { type, outline, text, contained }, 'contained' ],
    [ { primary, secondary, warn, danger }, 'primary' ]
  )

  const [ hoverRef, activeStyle ] = useThemeHover(
    btnStyles.default,
    btnStyles.hover,
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
        disabled && get(btnStyles, [ 'disabled', 'main' ]),
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
