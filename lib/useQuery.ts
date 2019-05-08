import { useContext } from 'react'
import isEqual from 'lodash.isequal'

import { QueryContext } from './QueryContext'
import { mapQuery } from './helpers/mapQuery'
import { getClearQuery } from './helpers/getClearQuery'

export const useQuery = () => {
  const { query } = useContext(QueryContext)
  const mappedQuery = mapQuery(query)

  // fallback on `windowQuery`
  // need for apps without `QueryContextProvider`
  try {
    const windowQuery = getClearQuery(window.location.search)

    if (!isEqual(query, windowQuery)) {
      return windowQuery
    }
  } catch (e) {
    // okay, just SSR
  }

  return mappedQuery
}
