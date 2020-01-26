import React from 'react'
import { isFunc } from 'jsutils'
import { isValidComponent } from '../helpers/isValidComponent'

export const renderFromType = (Element, props, Wrapper) => {
  return isValidComponent(Element)
    ? isFunc(Element)
      ? (<Element { ...props } />)
      : Element
    : Wrapper
      ? (<Wrapper { ...props }>{ Element }</Wrapper>)
      : Element
}