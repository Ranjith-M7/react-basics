import React from "react";
import useFetch from "./useFetch";
function App() {
  const [data, error] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <h1>{error}</h1>
      <ul>{data && data.map((list) => <li key={list.id}>{list.title}</li>)}</ul>
    </>
  );
}
export default App;

