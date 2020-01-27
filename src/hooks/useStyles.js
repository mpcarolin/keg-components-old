import React, { useState, useEffect } from 'react'
import { buildCompStyles } from '../utils'

export const useStyles = (theme, path, typeOpts, colorOpts) => {

  const [ activeStyles, setActiveStyles ] = useState(null)

  const styles = activeStyles || buildCompStyles(
    theme,
    path,
    typeOpts,
    colorOpts
  )

  useEffect(() => {
    !activeStyles && setActiveStyles(styles)
  }, [ activeStyles, theme ])

  return [ styles, setActiveStyles ]

}