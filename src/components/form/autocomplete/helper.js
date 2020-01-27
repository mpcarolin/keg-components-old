import { pipeline, isStr, isEmpty } from 'jsutils'
import { useState, useEffect } from 'react'

/**
 * Custom hook for acquiring menu items that are filtered based on text.
 * @param {String} text 
 * @param {Array} menuItems - all menu items
 */
export const useAutocompleteItems = ( text, menuItems ) => {
  const [ autocompleteItems, setAutocompleteMenuItems ] = useState([])
  const [ selectedItem, setSelectedItem ] = useState(null)

  // when text changes, update the autocomplete fields
  useEffect(() => {
    // hide the auto complete menu when text is empty or if user selected an item. Otherwise, update menu
    isEmpty(text) || (selectedItem === text)
      ? setAutocompleteMenuItems([]) 
      : setAutocompleteMenuItems(getAutocompleteItems(text, menuItems))
  }, [ text, menuItems, selectedItem ])

  return [ autocompleteItems, setSelectedItem, selectedItem ]
}

/**
 * Returns an array of unique items for an autocomplete menu
 * @param {String} text 
 * @param {Array} possibleValues - string array
 */
export const getAutocompleteItems = (text, possibleValues) => {
  // get all items that are substrings of text, ignoring case and accents
  const items = possibleValues
    .filter(item => item && stringIncludes(item, text, [ ignoreCase, ignoreAccents ]))
    .map(item => ({ text: item }))

  // remove duplicates
  return Array.from(new Set(items))
}

/**
 * Returns true if aString includes bString as a substring after applying the functions identified by transformFuncs 
 * TODO: Remove this if these functions are approved/merged into jsutils
 * @param {String} aString
 * @param {String} bString 
 * @param {Array} transformFuncs functions which transform aString and bString before the substring check
 * @example stringIncludes("I can say my abcs all day", "ÁBC", [ignoreCase, ignoreAccents]) // returns true
 */
const stringIncludes = (aString, bString, transformFuncs=[]) => {
  if (!isStr(aString) || !isStr(bString)) {
    console.error(`args in stringIncludes must be a string. Found: `, {aString, bString})
    return false
  }
  const a = pipeline(aString, ...transformFuncs)
  const b = pipeline(bString, ...transformFuncs)
  return a.includes(b)
}

/** Returns String s in lower case */
const ignoreCase = (s) => s.toLowerCase()

/** Returns String s normalized without accents, so Á is converted to A*/
const ignoreAccents = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
