import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>My API Project</h1>
      <h3>Count is {count}</h3>
      <p>Data {data.length} items</p>
      <p>Loading {loading ? "Yes" : "No"}</p>
      <button onClick={() => setCount(count + 1)}>Count +</button>
    </div>
  );
}

export default App;
