import React, { useCallback, useState, useEffect, useRef, useMemo } from 'react'
import isEqual from 'lodash.isequal'

import { QueryContext } from './QueryContext'
import { patchHistoryMethod } from './helpers/patchHistoryMethod'
import { getClearQuery } from './helpers/getClearQuery'

interface Props {
  children: React.ReactNode
  initial?: any
}

export const QueryContextProvider = ({ children, initial = {} }: Props) => {
  const realInitial = useMemo(
    () =>
      typeof initial === 'string' ? getClearQuery(initial) : initial || {},
    [initial],
  )

  const [query, setQuery] = useState(realInitial)
  const prevProps = useRef(realInitial)

  useEffect(() => {
    prevProps.current = realInitial
  }, [realInitial])

  useEffect(() => {
    patchHistoryMethod('pushState')
    patchHistoryMethod('replaceState')
  }, [])

  useEffect(() => {
    const initialChanged = !isEqual(prevProps.current, realInitial)
    if (initialChanged) {
      setQuery(realInitial)
    }
  }, [realInitial])

  const onRouteChange = useCallback(
    ({ url }: { url: string }) => setQuery(getClearQuery(url)),
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
