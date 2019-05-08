import * as React from 'react'
import { createPureContext } from 'react-shallow-context';

interface QueryContextValue {
  query: any
  setQuery: (value: any) => void
}

export const QueryContext = createPureContext<QueryContextValue>({
  query: {},
  setQuery: () => null,
})
