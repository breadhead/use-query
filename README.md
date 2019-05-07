# use-query

A react hook for easily synchronizing query string (http://your-url?yourParam=) with react context
Works with any client router through history API

## Installation

`yarn add @breadhead/use-query`

### Usage

#### first

Wrap your App in QueryContextProvider and throw initial query:

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

If your app builded with [next.js](https://nextjs.org/) you can use nextWithQuery [HOC](https://reactjs.org/docs/higher-order-components.html):

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
  const param = useQuery();

  // ...some code
};

export default componentWithQuery;
```

**in query-string:**

```
http://your-url?param=
```

## API

| Name                 | Type          | Props                   | Returned values                                                                                           | Description                                                          |
| -------------------- | ------------- | ----------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| useQuery             | react hook    | -                       | param: name of parameter in query string (looks like `param=` in query string) | hook for work with query string                                      |
| QueryContextProvider | react context | initial (router object) | -                                                                                                         | context provider that must be using at the top level of your app |
| nextWithQuery        | react hoc     | -                       | -                                                                                                         | hoc for the [next.js](https://nextjs.org/) app                                                 |
