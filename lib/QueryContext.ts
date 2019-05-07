import * as React from 'react'

interface QueryContextValue {
  query: any
  setQuery: (value: any) => void
}

export const QueryContext = React.createContext<QueryContextValue>({
  query: {},
  setQuery: () => null,
})
