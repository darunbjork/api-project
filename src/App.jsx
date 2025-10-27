import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const result = await response.json();

      setData(result);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>My API Project</h1>
      <p>Data {data.length} items</p>
      <button onClick={fetchData}>Get Data</button>
      <p>Loading {loading ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;
