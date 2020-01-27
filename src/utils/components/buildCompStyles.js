import { getActiveKey } from '../helpers/getActiveKey'


/**
 * Builds a components styles
 * Uses passed in path to get the component type / color from the theme
 * @param {Object} theme - Global ReTheme Object
 * @param {string} path - Path where the styles are located on the theme
 * @param {Object} typeOpts - Possible types of the component styles
 * @param {Object} colorOpts - Possible colors of the component styles
 * @param {Array} [extraStyles=[]] - Any extra styles to add when building the styles
 *
 * @returns {Object} - Built styles with all styles merged together
 */
export const buildCompStyles = (theme, path, typeOpts, colorOpts, extraStyles=[]) => {

  const compType = getActiveKey(...typeOpts)
  const colorType = getActiveKey(...colorOpts)

  return theme.get(
    compType && `${ path }.${ compType }`,
    compType && colorType && `${ path }.${ compType }.${ colorType }`,
    ...extraStyles
  )
}