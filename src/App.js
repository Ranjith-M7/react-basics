import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`
      );

      const data = await response.json();
      
      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((list) => (
          <li key={Math.random()}>{list.title}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
