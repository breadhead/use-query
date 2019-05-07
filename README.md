# use-query

A react hook for easily synchronizing query string (http://your-url?yourParam='someValue') with react context.
Works with any client router through history API

## Installation

`yarn add @breadhead/use-query`

### Usage

#### first

Wrap your App in QueryContextProvider and pass initial query:

#### in App.js

```js
// QueryContextApp.js
import { QueryContextProvider } from "@breadhead/use-query";
import App from './App';

class QueryContextApp {
  public render() {
    const appContext = // ...some code

    return (
      <QueryContextProvider initial={appContext.query}>
        <App />
      </QueryContextProvider>
      );
  };
}

export default QueryContextApp;
```

If your app builded with [next.js](https://nextjs.org/) you can use nextWithQuery HOC:

```js
// app.js
import { nextWithQuery } from "@breadhead/use-query";

export default nextWithQuery(Application);
```

#### second

Now you can add useQuery hook to any component and recieve the query parameter value

#### in your component with query using

```js
// componentWithQuery.js
import { useQuery } from "@breadhead/use-query";

const componentWithQuery = () => {
  const { param }  = useQuery();

  // ...some code
};

export default componentWithQuery;
```

**in query-string:**

```
http://your-url?param=
```
