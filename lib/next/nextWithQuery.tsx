import {
  AppComponentType,
  AppProps,
  DefaultAppIProps,
  NextAppContext,
} from 'next/app'
import * as React from 'react'
import { QueryContextProvider } from '../QueryContextProvider'

type NextProps = AppProps & DefaultAppIProps
interface QueryProps {
  query: any
}

export const nextWithQuery = (Application: AppComponentType<NextProps>) => {
  return class AppWithQuery extends React.Component<NextProps & QueryProps> {
    public static async getInitialProps(appContext: NextAppContext) {
      let appProps = {}
      if (typeof Application.getInitialProps === 'function') {
        appProps = await Application.getInitialProps(appContext)
      }

      const { query } = appContext.router

      return { ...appProps, query }
    }

    public render() {
      const { query, ...appProps } = this.props

      return (
        <QueryContextProvider initial={query}>
          <Application {...appProps} />
        </QueryContextProvider>
      )
    }
  }
}
