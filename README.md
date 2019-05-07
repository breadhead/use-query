# use-query

A react hook for easy work with query string

## Installation

`yarn add @breadhead/use-query`

## API

| Prop                 | Type          | Props                   | Returned values                                                                                           | Description                                                          |
| -------------------- | ------------- | ----------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| useQuery             | react hook    | -                       | query: { yourParameter }: name of parameter in query string (looks like `yourParameter=` in query string) | hook for work with query string                                      |
| QueryContextProvider | react context | initial (router object) | -                                                                                                         | context provider that you must be using at the top level of your app |
| nextWithQuery        | react hoc     | -                       | -                                                                                                         | hoc for the next app                                                 |

### Usage

#### in App.js

**regular**

```js
// app.js
import { QueryContextProvider } from "@breadhead/use-query";

class App {
  public render() {
    const appContext = // ...some code

    const { query } = appContext

    return (
      <QueryContextProvider initial={query}>
        <Application />
      </QueryContextProvider>
      );
  };
}

export default App;
```

**with next**

```js
// app.js
import { nextWithQuery } from "@breadhead/use-query";

export default nextWithQuery(Application);
```

#### in your component with query using

```js
// componentWithQuery.js
import { useQuery } from "@breadhead/use-query";

const componentWithQuery = () => {
  const {
    query: { param }
  } = useQuery();

  // ...some code
};

export default componentWithQuery;
```

**in query-string:**

```
http://your-url?param=
```
