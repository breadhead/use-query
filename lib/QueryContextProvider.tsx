import React, { useCallback, useState, useEffect, useRef } from 'react'
import isEqual from 'lodash.isequal'
import qs from 'qs'

import { QueryContext } from './QueryContext'
import { patchHistoryMethod } from 'helpers/patchHistoryMethod';

interface Props {
  children: React.ReactNode
  initial?: any
}

export const QueryContextProvider = ({ children, initial = {} }: Props) => {
  const [query, setQuery] = useState(initial)
  const prevProps = useRef(initial)

  useEffect(() => {
    prevProps.current = initial
  }, [initial])

  useEffect(() => {
    patchHistoryMethod('pushState')
    patchHistoryMethod('replaceState')
  }, [])

  useEffect(() => {
    const initialChanged = !isEqual(prevProps.current, initial)
    if (initialChanged) {
      setQuery(initial)
    }
  }, [initial])

  const onRouteChange = useCallback(
    ({ url }: { url: string }) => {
      const [, queryString] = url.split('?')
      const parsedQuery = qs.parse(queryString)
      setQuery(parsedQuery)
    },
    [setQuery],
  )

  useEffect(() => {
    window.addEventListener('routeChanges', onRouteChange as any)

    return () => {
      window.removeEventListener('routeChanges', onRouteChange as any)
    }
  }, [onRouteChange])

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  )
}
