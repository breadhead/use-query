import * as React from 'react';
import {updateOnlyFor} from 'react-shallow-context';

interface QueryContextValue {
  query: any
  setQuery: (value: any) => void
}

export const QueryContext = React.createContext<QueryContextValue>({
  query: {},
  setQuery: () => null,
}, updateOnlyFor(['query']))
