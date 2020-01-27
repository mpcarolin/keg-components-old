import { getActiveKey } from '../helpers/getActiveKey'


export const buildCompStyles = (theme, path, typeOpts, colorOpts) => {

  const btnType = getActiveKey(...typeOpts)
  const colorType = getActiveKey(...colorOpts)

  return theme.get(
    `${ path }.${ btnType }`,
    `${ path }.${ btnType }.${ colorType }`,
  )
}