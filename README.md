# use-query

A react hook for easily synchronizing query string (e.g. http://your-url?yourParam=someValue) with react context.
Works with any client router through history API.

## Installation

`yarn add @breadhead/use-query`

### Usage

It just works.

```js
// Navigation.jsx
import { useQuery } from "@breadhead/use-query";

export const Navigation = () => {
  const { param }  = useQuery();

  // ...some code

  return <p>{param}</p>
};
```

If you want use it with SSR, just add `QueryContextProvider`

```js
// QueryContextApp.js
import { QueryContextProvider } from "@breadhead/use-query";
import App from './App';

export class QueryContextApp {
  public render() {
    const query = ... // get query from request

    return (
      <QueryContextProvider initial={query}>
        <App />
      </QueryContextProvider>
      );
  };
}
```

#### Next.js

If your app builded with [Next.js](https://nextjs.org/) you can use built-in `nextWithQuery` HOC:

```js
// _app.js
import { nextWithQuery } from "@breadhead/use-query";

export default nextWithQuery(Application);
```
