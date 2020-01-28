import React from 'react'
import { useTheme, useThemeHover } from 're-theme'
import { P } from 'KegTypography'
import PropTypes from 'prop-types'

export const SelectItem = ({ text='', onSelect=()=>{} }) => {
  const theme = useTheme()
  const [ ref, hoverStyle ] = useThemeHover({}, theme.form.autocomplete.highlighted)

  return (
    <div 
      ref={ref}
      style={hoverStyle}
      onClick={() => onSelect({text})}
    >
      <P style={theme.form.autocomplete.item}>
        { text }
      </P>
    </div>
  )
}

SelectItem.propTypes = {
  text: PropTypes.string,
  onSelect: PropTypes.func
}


