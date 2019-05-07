import mapValues from 'lodash.mapvalues'

export const mapQuery = (query: any) => {
  return mapValues(query, value => {
    if (value === 'undefined') {
      return undefined
    }
    return decodeURIComponent(value)
  })
}
