import { reduceObj } from 'jsutils'

export const getActiveKey = (keys, isDefault) => {
  return reduceObj(keys, (key, value, activeKey) => {
    value && (activeKey = key)

    return activeKey
  }, isDefault)
}