import { stringIncludes, ignoreCase, ignoreAccents } from './stringIncludes'
/**
 * Returns a new array containing a subset of possibleValues, each of which is:
 *  - unique; and
 *  - either a substring of `text` or the same string.
 * 
 * The filter ignores cases and accents.
 * @param {String} text 
 * @param {Array} possibleValues - string array
 * @returns - the new array of strings
 */
export const getFilteredStrings = (text, possibleValues) => {
  const isMatch = item => item && stringIncludes(item, text, [ ignoreCase, ignoreAccents ])

  const items = possibleValues.filter(isMatch)

  // remove duplicates
  return Array.from(new Set(items))
}