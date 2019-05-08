import qs from 'qs'
import { mapQuery } from './mapQuery'

export const getClearQuery = (input: string) => {
  const [, queryString] = input.split('?')

  return mapQuery(qs.parse(queryString))
}
