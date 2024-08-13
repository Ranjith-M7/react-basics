import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d));
  }, [url]);
  const error = "hehe";
  return [data, error];
};

export default useFetch;
