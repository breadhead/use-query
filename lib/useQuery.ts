import { useContext } from "react";
import { QueryContext } from "./QueryContext";
import { mapQuery } from "./helpers/mapQuery";

export const useQuery = () => {
  const { query } = useContext(QueryContext);
  const mappedQuery = mapQuery(query);

  return mappedQuery;
};
