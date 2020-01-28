import { pipeline, isStr } from 'jsutils'

/**
 * Returns true if aString includes bString as a substring after applying the functions identified by transformFuncs 
 * TODO: Remove this if these functions are approved/merged into jsutils
 * @param {String} aString
 * @param {String} bString 
 * @param {Array} transformFuncs functions which transform aString and bString before the substring check
 * @example stringIncludes("I can say my abcs all day", "ÁBC", [ignoreCase, ignoreAccents]) // returns true
 */
export const stringIncludes = (aString, bString, transformFuncs=[]) => {
  if (!isStr(aString) || !isStr(bString)) {
    console.error(`args in stringIncludes must be a string. Found: `, {aString, bString})
    return false
  }
  const a = pipeline(aString, ...transformFuncs)
  const b = pipeline(bString, ...transformFuncs)
  return a.includes(b)
}

/** Returns String s in lower case */
export const ignoreCase = (s) => s.toLowerCase()

/** Returns String s normalized without accents, so Á is converted to A*/
export const ignoreAccents = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")